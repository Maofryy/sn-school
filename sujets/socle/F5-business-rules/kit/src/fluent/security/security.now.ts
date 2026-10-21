import '@servicenow/sdk/global'
import { Acl, Property, Role } from '@servicenow/sdk/core'

export const f5User = Role({
    name: 'x_1606601_f5.user',
    description: 'Utilisateur de l’application Prêt de matériel',
})

Acl({
    $id: Now.ID['item-read'],
    type: 'record',
    table: 'x_1606601_f5_item',
    operation: 'read',
    roles: [f5User],
})

Acl({
    $id: Now.ID['loan-read'],
    type: 'record',
    table: 'x_1606601_f5_loan_request',
    operation: 'read',
    roles: [f5User],
})

Acl({
    $id: Now.ID['loan-create'],
    type: 'record',
    table: 'x_1606601_f5_loan_request',
    operation: 'create',
    roles: [f5User],
})

Acl({
    $id: Now.ID['loan-write'],
    type: 'record',
    table: 'x_1606601_f5_loan_request',
    operation: 'write',
    roles: [f5User],
})

Property({
    $id: Now.ID['default-group'],
    name: 'x_1606601_f5.default_group',
    type: 'string',
    value: 'Gestionnaires matériel',
    description: 'Groupe qui traite les demandes dont le demandeur n’a pas de manager',
})
