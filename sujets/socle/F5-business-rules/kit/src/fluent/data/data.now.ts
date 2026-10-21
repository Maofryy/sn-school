import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Données de départ. Les tests ATF créent leurs propres matériels et demandes :
// ils ne dépendent que des utilisateurs et du groupe ci-dessous.

export const managersGroup = Record({
    $id: Now.ID['group-managers'],
    table: 'sys_user_group',
    data: { name: 'Gestionnaires matériel', description: 'SN School F5', active: true },
})

export const manon = Record({
    $id: Now.ID['user-manon'],
    table: 'sys_user',
    data: { user_name: 'f5.manon', first_name: 'Manon', last_name: 'Leroy', active: true },
})

export const alice = Record({
    $id: Now.ID['user-alice'],
    table: 'sys_user',
    data: { user_name: 'f5.alice', first_name: 'Alice', last_name: 'Martin', manager: manon, active: true },
})

export const bob = Record({
    $id: Now.ID['user-bob'],
    table: 'sys_user',
    data: { user_name: 'f5.bob', first_name: 'Bob', last_name: 'Durand', active: true },
})

const f5UserRole = Now.ref('sys_user_role', { name: 'x_1606601_f5.user' })
Record({
    $id: Now.ID['role-manon'],
    table: 'sys_user_has_role',
    data: { user: manon, role: f5UserRole },
})

Record({
    $id: Now.ID['role-alice'],
    table: 'sys_user_has_role',
    data: { user: alice, role: f5UserRole },
})

Record({
    $id: Now.ID['role-bob'],
    table: 'sys_user_has_role',
    data: { user: bob, role: f5UserRole },
})

Record({
    $id: Now.ID['member-manon'],
    table: 'sys_user_grmember',
    data: { group: managersGroup, user: manon },
})

export const laptop = Record({
    $id: Now.ID['item-laptop'],
    table: 'x_1606601_f5_item',
    data: { name: 'PC portable', category: 'laptop', stock_total: 5, max_loan_days: 30, reserved_quantity: 0 },
})

export const screen = Record({
    $id: Now.ID['item-screen'],
    table: 'x_1606601_f5_item',
    data: { name: 'Écran', category: 'screen', stock_total: 2, max_loan_days: 10, reserved_quantity: 0 },
})

Record({
    $id: Now.ID['item-headset'],
    table: 'x_1606601_f5_item',
    data: { name: 'Casque', category: 'headset', stock_total: 10, reserved_quantity: 0 },
})

Record({
    $id: Now.ID['loan-demo-1'],
    table: 'x_1606601_f5_loan_request',
    data: {
        number: 'LOAN0000901',
        requested_for: alice,
        item: laptop,
        quantity: 1,
        start_date: '2099-01-05',
        end_date: '2099-01-20',
        state: 'submitted',
    },
})

Record({
    $id: Now.ID['loan-demo-2'],
    table: 'x_1606601_f5_loan_request',
    data: {
        number: 'LOAN0000902',
        requested_for: bob,
        item: screen,
        quantity: 2,
        start_date: '2099-02-01',
        end_date: '2099-02-05',
        state: 'draft',
    },
})
