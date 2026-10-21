import '@servicenow/sdk/global'
import { ChoiceColumn, DateColumn, IntegerColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

// Les tables sont ouvertes aux autres scopes : la suite de correction (scope x_1606601_f5h) y écrit.
export const x_1606601_f5_item = Table({
    name: 'x_1606601_f5_item',
    label: 'Matériel',
    display: 'name',
    accessibleFrom: 'public',
    callerAccess: 'tracking',
    actions: { read: true, create: true, update: true, delete: true },
    schema: {
        name: StringColumn({ label: 'Nom', mandatory: true, maxLength: 100 }),
        category: ChoiceColumn({
            label: 'Catégorie',
            choices: { laptop: 'PC portable', screen: 'Écran', headset: 'Casque' },
        }),
        stock_total: IntegerColumn({ label: 'Stock total', mandatory: true, default: '0' }),
        max_loan_days: IntegerColumn({ label: 'Durée max de prêt (jours)', hint: 'Vide ou 0 : sans limite' }),
        reserved_quantity: IntegerColumn({ label: 'Quantité réservée', readOnly: true, default: '0' }),
    },
})

export const x_1606601_f5_loan_request = Table({
    name: 'x_1606601_f5_loan_request',
    label: 'Demande de prêt',
    display: 'number',
    accessibleFrom: 'public',
    callerAccess: 'tracking',
    actions: { read: true, create: true, update: true, delete: true },
    autoNumber: { prefix: 'LOAN', number: 1000, numberOfDigits: 7 },
    schema: {
        number: StringColumn({ label: 'Numéro', maxLength: 40, readOnly: true }),
        requested_for: ReferenceColumn({
            label: 'Demandé pour',
            referenceTable: 'sys_user',
            mandatory: true,
            default: 'javascript:gs.getUserID()',
        }),
        item: ReferenceColumn({ label: 'Matériel', referenceTable: 'x_1606601_f5_item', mandatory: true }),
        quantity: IntegerColumn({ label: 'Quantité', mandatory: true, default: '1' }),
        start_date: DateColumn({ label: 'Début', mandatory: true }),
        end_date: DateColumn({ label: 'Fin', mandatory: true }),
        state: ChoiceColumn({
            label: 'État',
            default: 'draft',
            choices: {
                draft: { label: 'Brouillon', sequence: 10 },
                submitted: { label: 'Soumise', sequence: 20 },
                approved: { label: 'Approuvée', sequence: 30 },
                rejected: { label: 'Refusée', sequence: 40 },
                returned: { label: 'Rendue', sequence: 50 },
                cancelled: { label: 'Annulée', sequence: 60 },
            },
        }),
        approver: ReferenceColumn({ label: 'Approbateur', referenceTable: 'sys_user' }),
        assignment_group: ReferenceColumn({ label: "Groupe d'affectation", referenceTable: 'sys_user_group' }),
    },
})
