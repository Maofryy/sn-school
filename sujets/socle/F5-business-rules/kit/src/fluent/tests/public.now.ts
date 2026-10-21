import '@servicenow/sdk/global'
import { Test, TestSuite } from '@servicenow/sdk/core'
import { alice, bob } from '../data/data.now'

// Suite publique livrée à l'apprenant : rouge sur le kit seul, verte quand E1 à E5 sont en place.
// Les dates sont en 2099 pour rester « à venir » quel que soit le jour d'exécution.

const LOAN = 'x_1606601_f5_loan_request'
const ITEM = 'x_1606601_f5_item'

// Les tests E1 créent leurs demandes avec setWorkflow(false) : on teste le Script Include seul,
// sans déclencher les Business Rules de l'apprenant.

const pub01 = Test(
    {
        $id: Now.ID['pub-01'],
        name: 'F5 PUB-01 · E1 · aucune demande approuvée → 0',
        description: 'Appelle LoanStockUtils.getReservedQuantity sur un matériel sans demande et attend 0.',
        failOnServerError: true,
    },
    (atf) => {
        atf.server.runServerSideScript({
            $id: Now.ID['pub-01-script'],
            script: `(function(outputs, steps, params, stepResult, assertEqual) {
                var item = new GlideRecord('x_1606601_f5_item');
                item.initialize();
                item.setValue('name', 'ATF - matériel');
                item.setValue('stock_total', 10);
                var itemId = item.insert();
                var reserved = new LoanStockUtils().getReservedQuantity(itemId, '2099-03-01', '2099-03-31');
                assertEqual({ name: 'Quantité réservée', shouldbe: 0, value: Number(reserved) });
            })(outputs, steps, params, stepResult, assertEqual);`,
        })
    }
)

const pub02 = Test(
    {
        $id: Now.ID['pub-02'],
        name: 'F5 PUB-02 · E1 · deux demandes approuvées + un brouillon → 3',
        description:
            'Crée deux demandes approuvées (1 et 2) qui chevauchent la période et un brouillon (5), puis attend 3 : seules les approuvées comptent.',
        failOnServerError: true,
    },
    (atf) => {
        atf.server.runServerSideScript({
            $id: Now.ID['pub-02-script'],
            script: `(function(outputs, steps, params, stepResult, assertEqual) {
                var item = new GlideRecord('x_1606601_f5_item');
                item.initialize();
                item.setValue('name', 'ATF - matériel');
                item.setValue('stock_total', 10);
                var itemId = item.insert();
                function loan(state, quantity, start, end) {
                    var gr = new GlideRecord('x_1606601_f5_loan_request');
                    gr.initialize();
                    gr.setWorkflow(false);
                    gr.setValue('item', itemId);
                    gr.setValue('quantity', quantity);
                    gr.setValue('start_date', start);
                    gr.setValue('end_date', end);
                    gr.setValue('state', state);
                    return gr.insert();
                }
                loan('approved', 1, '2099-03-01', '2099-03-10');
                loan('approved', 2, '2099-03-05', '2099-03-15');
                loan('draft', 5, '2099-03-01', '2099-03-31');
                var reserved = new LoanStockUtils().getReservedQuantity(itemId, '2099-03-01', '2099-03-31');
                assertEqual({ name: 'Quantité réservée', shouldbe: 3, value: Number(reserved) });
            })(outputs, steps, params, stepResult, assertEqual);`,
        })
    }
)

const pub03 = Test(
    {
        $id: Now.ID['pub-03'],
        name: 'F5 PUB-03 · E2 · fin avant début → refusée',
        description: 'Insère une demande dont la date de fin précède la date de début et attend un refus.',
        failOnServerError: false,
    },
    (atf) => {
        const item = atf.server.recordInsert({
            $id: Now.ID['pub-03-item'],
            table: ITEM,
            fieldValues: { name: 'ATF - PC', stock_total: 5, max_loan_days: 30 },
        })
        atf.server.recordInsert({
            $id: Now.ID['pub-03-loan'],
            table: LOAN,
            fieldValues: { requested_for: alice.$id, item: item.record_id, quantity: 1, start_date: '2099-05-10', end_date: '2099-05-01', state: 'submitted' },
            assert: 'record_not_inserted',
        })
    }
)

const pub04 = Test(
    {
        $id: Now.ID['pub-04'],
        name: 'F5 PUB-04 · E2 · durée > max_loan_days → refusée',
        description: 'Matériel limité à 30 jours ; insère une demande de 46 jours et attend un refus.',
        failOnServerError: false,
    },
    (atf) => {
        const item = atf.server.recordInsert({
            $id: Now.ID['pub-04-item'],
            table: ITEM,
            fieldValues: { name: 'ATF - PC', stock_total: 5, max_loan_days: 30 },
        })
        atf.server.recordInsert({
            $id: Now.ID['pub-04-loan'],
            table: LOAN,
            fieldValues: { requested_for: alice.$id, item: item.record_id, quantity: 1, start_date: '2099-05-01', end_date: '2099-06-15', state: 'submitted' },
            assert: 'record_not_inserted',
        })
    }
)

const pub05 = Test(
    {
        $id: Now.ID['pub-05'],
        name: 'F5 PUB-05 · E2 · demande valide → insérée',
        description: 'Insère une demande de 5 jours, quantité 1, sur un matériel limité à 30 jours, et attend son insertion.',
        failOnServerError: true,
    },
    (atf) => {
        const item = atf.server.recordInsert({
            $id: Now.ID['pub-05-item'],
            table: ITEM,
            fieldValues: { name: 'ATF - PC', stock_total: 5, max_loan_days: 30 },
        })
        atf.server.recordInsert({
            $id: Now.ID['pub-05-loan'],
            table: LOAN,
            fieldValues: { requested_for: alice.$id, item: item.record_id, quantity: 1, start_date: '2099-05-01', end_date: '2099-05-05', state: 'submitted' },
        })
    }
)

const pub06 = Test(
    {
        $id: Now.ID['pub-06'],
        name: 'F5 PUB-06 · E3 · demandeur avec manager → approver = manager',
        description: "Insère une demande pour f5.alice (manager f5.manon) et vérifie que l'approbateur est f5.manon.",
        failOnServerError: true,
    },
    (atf) => {
        const item = atf.server.recordInsert({
            $id: Now.ID['pub-06-item'],
            table: ITEM,
            fieldValues: { name: 'ATF - Casque', stock_total: 10 },
        })
        const loan = atf.server.recordInsert({
            $id: Now.ID['pub-06-loan'],
            table: LOAN,
            fieldValues: { requested_for: alice.$id, item: item.record_id, quantity: 1, start_date: '2099-05-01', end_date: '2099-05-02', state: 'submitted' },
        })
        atf.server.recordValidation({
            $id: Now.ID['pub-06-check'],
            table: LOAN,
            recordId: loan.record_id,
            fieldValues: 'approver.user_name=f5.manon',
        })
    }
)

const pub07 = Test(
    {
        $id: Now.ID['pub-07'],
        name: 'F5 PUB-07 · E3 · demandeur sans manager → groupe par défaut',
        description: 'Insère une demande pour f5.bob (sans manager) et vérifie le groupe « Gestionnaires matériel ».',
        failOnServerError: true,
    },
    (atf) => {
        const item = atf.server.recordInsert({
            $id: Now.ID['pub-07-item'],
            table: ITEM,
            fieldValues: { name: 'ATF - Casque', stock_total: 10 },
        })
        const loan = atf.server.recordInsert({
            $id: Now.ID['pub-07-loan'],
            table: LOAN,
            fieldValues: { requested_for: bob.$id, item: item.record_id, quantity: 1, start_date: '2099-05-01', end_date: '2099-05-02', state: 'submitted' },
        })
        atf.server.recordValidation({
            $id: Now.ID['pub-07-check'],
            table: LOAN,
            recordId: loan.record_id,
            fieldValues: 'assignment_group.name=Gestionnaires matériel',
        })
    }
)

const pub08 = Test(
    {
        $id: Now.ID['pub-08'],
        name: 'F5 PUB-08 · E4 · stock suffisant → approuvée',
        description: 'Matériel en stock 10 ; approuve une demande de 2 et vérifie l’état approved.',
        failOnServerError: true,
    },
    (atf) => {
        const item = atf.server.recordInsert({
            $id: Now.ID['pub-08-item'],
            table: ITEM,
            fieldValues: { name: 'ATF - Casque', stock_total: 10 },
        })
        const loan = atf.server.recordInsert({
            $id: Now.ID['pub-08-loan'],
            table: LOAN,
            fieldValues: { requested_for: alice.$id, item: item.record_id, quantity: 2, start_date: '2099-07-01', end_date: '2099-07-05', state: 'submitted' },
        })
        atf.server.recordUpdate({
            $id: Now.ID['pub-08-approve'],
            table: LOAN,
            recordId: loan.record_id,
            fieldValues: { state: 'approved' },
        })
        atf.server.recordValidation({
            $id: Now.ID['pub-08-check'],
            table: LOAN,
            recordId: loan.record_id,
            fieldValues: 'state=approved',
        })
    }
)

const pub09 = Test(
    {
        $id: Now.ID['pub-09'],
        name: 'F5 PUB-09 · E4 · stock insuffisant → refus',
        description:
            'Matériel en stock 2 ; une première demande de 2 est approuvée, la seconde (1, même période) doit être refusée et rester submitted.',
        failOnServerError: false,
    },
    (atf) => {
        const item = atf.server.recordInsert({
            $id: Now.ID['pub-09-item'],
            table: ITEM,
            fieldValues: { name: 'ATF - Écran', stock_total: 2, max_loan_days: 10 },
        })
        const first = atf.server.recordInsert({
            $id: Now.ID['pub-09-loan-1'],
            table: LOAN,
            fieldValues: { requested_for: alice.$id, item: item.record_id, quantity: 2, start_date: '2099-07-01', end_date: '2099-07-05', state: 'submitted' },
        })
        atf.server.recordUpdate({
            $id: Now.ID['pub-09-approve-1'],
            table: LOAN,
            recordId: first.record_id,
            fieldValues: { state: 'approved' },
        })
        const second = atf.server.recordInsert({
            $id: Now.ID['pub-09-loan-2'],
            table: LOAN,
            fieldValues: { requested_for: alice.$id, item: item.record_id, quantity: 1, start_date: '2099-07-03', end_date: '2099-07-04', state: 'submitted' },
        })
        atf.server.recordUpdate({
            $id: Now.ID['pub-09-approve-2'],
            table: LOAN,
            recordId: second.record_id,
            fieldValues: { state: 'approved' },
            assert: 'record_not_updated',
        })
        atf.server.recordValidation({
            $id: Now.ID['pub-09-check'],
            table: LOAN,
            recordId: second.record_id,
            fieldValues: 'state=submitted',
        })
    }
)

const pub10 = Test(
    {
        $id: Now.ID['pub-10'],
        name: 'F5 PUB-10 · E5 · reserved_quantity suit les approbations',
        description: 'Approuve une demande de 3 et vérifie reserved_quantity = 3, puis la rend et vérifie reserved_quantity = 0.',
        failOnServerError: true,
    },
    (atf) => {
        const item = atf.server.recordInsert({
            $id: Now.ID['pub-10-item'],
            table: ITEM,
            fieldValues: { name: 'ATF - Casque', stock_total: 10, reserved_quantity: 0 },
        })
        const loan = atf.server.recordInsert({
            $id: Now.ID['pub-10-loan'],
            table: LOAN,
            fieldValues: { requested_for: alice.$id, item: item.record_id, quantity: 3, start_date: '2099-08-01', end_date: '2099-08-03', state: 'submitted' },
        })
        atf.server.recordUpdate({
            $id: Now.ID['pub-10-approve'],
            table: LOAN,
            recordId: loan.record_id,
            fieldValues: { state: 'approved' },
        })
        atf.server.recordValidation({
            $id: Now.ID['pub-10-check-approved'],
            table: ITEM,
            recordId: item.record_id,
            fieldValues: 'reserved_quantity=3',
        })
        atf.server.recordUpdate({
            $id: Now.ID['pub-10-return'],
            table: LOAN,
            recordId: loan.record_id,
            fieldValues: { state: 'returned' },
        })
        atf.server.recordValidation({
            $id: Now.ID['pub-10-check-returned'],
            table: ITEM,
            recordId: item.record_id,
            fieldValues: 'reserved_quantity=0',
        })
    }
)

export const publicSuite = TestSuite({
    $id: Now.ID['suite-public'],
    name: 'F5 – Public',
    description: 'Tests publics du sujet F5. Verts = condition nécessaire, pas suffisante.',
    tests: [pub01, pub02, pub03, pub04, pub05, pub06, pub07, pub08, pub09, pub10],
})
