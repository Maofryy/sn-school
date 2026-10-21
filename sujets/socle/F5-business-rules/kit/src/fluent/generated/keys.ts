import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'e26396be2620412da2dd4a54404ec211'
                    }
                    'default-group': {
                        table: 'sys_properties'
                        id: '226ca84437c8410ca6edc9baff5823fe'
                    }
                    'group-managers': {
                        table: 'sys_user_group'
                        id: '5e132803d5de416db12ba1bc73260397'
                    }
                    'item-headset': {
                        table: 'x_1606601_f5_item'
                        id: 'e4f66d7cc0974d6cb8b76a2bd850321b'
                    }
                    'item-laptop': {
                        table: 'x_1606601_f5_item'
                        id: 'c2eaae8758384cedb18a6f3223723d54'
                    }
                    'item-read': {
                        table: 'sys_security_acl'
                        id: 'b49ba124fb9b45b8bdd8cca6a687e9a7'
                    }
                    'item-screen': {
                        table: 'x_1606601_f5_item'
                        id: 'c09c19fc362647bf95616d6126e277f4'
                    }
                    'loan-create': {
                        table: 'sys_security_acl'
                        id: '2f09840ae2734edc87444741b78e21df'
                    }
                    'loan-demo-1': {
                        table: 'x_1606601_f5_loan_request'
                        id: '1e063eec33d74038b38bf4b90287c749'
                    }
                    'loan-demo-2': {
                        table: 'x_1606601_f5_loan_request'
                        id: 'b19bd9524fcb41ae9f7a6271e589e619'
                    }
                    'loan-read': {
                        table: 'sys_security_acl'
                        id: '1e92b2036d8c404d9cc883814b3ecfc0'
                    }
                    'loan-write': {
                        table: 'sys_security_acl'
                        id: 'daf6ff0acc1d4c0d91f83d302aece2c6'
                    }
                    'member-manon': {
                        table: 'sys_user_grmember'
                        id: '4e14914c9ba1475fa511d1676496e56a'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'fba87a4cc7f942c1a98747d9546fd152'
                    }
                    'pub-01': {
                        table: 'sys_atf_test'
                        id: '88ef7999f0db4913ac8ffe8edd9898d9'
                    }
                    'pub-01-script': {
                        table: 'sys_atf_step'
                        id: '621f2f5fdd8b4eeda08d3f3afbdb89fd'
                    }
                    'pub-02': {
                        table: 'sys_atf_test'
                        id: 'b2d04150e1694636828ed668e63929e9'
                    }
                    'pub-02-script': {
                        table: 'sys_atf_step'
                        id: '401113d843de44bc9f581162ee8a33ec'
                    }
                    'pub-03': {
                        table: 'sys_atf_test'
                        id: 'f2115f724d3842f285fe230a8219c9e9'
                    }
                    'pub-03-item': {
                        table: 'sys_atf_step'
                        id: 'bcfff5fb6d9f42ae9630c7f934767c81'
                    }
                    'pub-03-loan': {
                        table: 'sys_atf_step'
                        id: '96de37adf25e4fd3a82c66872ef23ef6'
                    }
                    'pub-04': {
                        table: 'sys_atf_test'
                        id: 'e98e91fb78654dac8297efc3186dd375'
                    }
                    'pub-04-item': {
                        table: 'sys_atf_step'
                        id: '6eb090334d044a518a27e72740b24945'
                    }
                    'pub-04-loan': {
                        table: 'sys_atf_step'
                        id: '664c19e5d4534df6ac6c3e805eb3c985'
                    }
                    'pub-05': {
                        table: 'sys_atf_test'
                        id: 'c7895f8c141d402ea8a209aab856717b'
                    }
                    'pub-05-item': {
                        table: 'sys_atf_step'
                        id: 'a72a3761a58a42e3b29d16b50573dfde'
                    }
                    'pub-05-loan': {
                        table: 'sys_atf_step'
                        id: '75c5ac5ec2f94086a4c371a69fc1c70c'
                    }
                    'pub-06': {
                        table: 'sys_atf_test'
                        id: '520d163ca1114a4190a8d12b751c2907'
                    }
                    'pub-06-check': {
                        table: 'sys_atf_step'
                        id: '64368425bf7a47de83d0b1eab3dcd51e'
                    }
                    'pub-06-item': {
                        table: 'sys_atf_step'
                        id: '63a3ff68acdc4e1d8ac32416852de91d'
                    }
                    'pub-06-loan': {
                        table: 'sys_atf_step'
                        id: 'c3c0a014b29c4f46b68f975fd6c8be14'
                    }
                    'pub-07': {
                        table: 'sys_atf_test'
                        id: '7882acdab89543bfa568183cb03e8f77'
                    }
                    'pub-07-check': {
                        table: 'sys_atf_step'
                        id: '9ced56b2de7a40379ea9af2e4fe342ab'
                    }
                    'pub-07-item': {
                        table: 'sys_atf_step'
                        id: '0ad0df526067446083260b43693840a1'
                    }
                    'pub-07-loan': {
                        table: 'sys_atf_step'
                        id: 'fb4be95bfe85428cac9b4cadd2d76bd0'
                    }
                    'pub-08': {
                        table: 'sys_atf_test'
                        id: '0c697e39df87472a90b8dd1c55e428e3'
                    }
                    'pub-08-approve': {
                        table: 'sys_atf_step'
                        id: 'ea371b2cf04140d98dec90e13c23ec19'
                    }
                    'pub-08-check': {
                        table: 'sys_atf_step'
                        id: 'fafc5d3d14ad4851985bf1f9dddbe520'
                    }
                    'pub-08-item': {
                        table: 'sys_atf_step'
                        id: 'c0632eb989df4dd5a47e46f25122392f'
                    }
                    'pub-08-loan': {
                        table: 'sys_atf_step'
                        id: '62eaa7f4b1c247b1871a8cd6b2ac03b0'
                    }
                    'pub-09': {
                        table: 'sys_atf_test'
                        id: '24df6a49a34e477685b94d461ba5a209'
                    }
                    'pub-09-approve-1': {
                        table: 'sys_atf_step'
                        id: 'b2fe1e5f06cc44f197c8def215907a79'
                    }
                    'pub-09-approve-2': {
                        table: 'sys_atf_step'
                        id: 'f82904a1b3c3456f98e6f423f56be580'
                    }
                    'pub-09-check': {
                        table: 'sys_atf_step'
                        id: '10d63a865b4b411d883b222718ec520e'
                    }
                    'pub-09-item': {
                        table: 'sys_atf_step'
                        id: '288f8bb517194dfb8da7f2f5e9c0744b'
                    }
                    'pub-09-loan-1': {
                        table: 'sys_atf_step'
                        id: 'db834941087a4bcbbd946727f9602378'
                    }
                    'pub-09-loan-2': {
                        table: 'sys_atf_step'
                        id: '6dbfdd9edaaf4d00a207a2f31b8f5d1d'
                    }
                    'pub-10': {
                        table: 'sys_atf_test'
                        id: '220aa043ee4f4f66b8b01d8216fcc386'
                    }
                    'pub-10-approve': {
                        table: 'sys_atf_step'
                        id: 'caf890ff578b4f00abbf3d37242c039c'
                    }
                    'pub-10-check-approved': {
                        table: 'sys_atf_step'
                        id: '72f1551b248f4e5386ce04dbaaa9058b'
                    }
                    'pub-10-check-returned': {
                        table: 'sys_atf_step'
                        id: '42bc1229d15f4f799025409f358c264b'
                    }
                    'pub-10-item': {
                        table: 'sys_atf_step'
                        id: '23d3b1b59e1547b5a6b274b9e4748cac'
                    }
                    'pub-10-loan': {
                        table: 'sys_atf_step'
                        id: 'a734ef69816944e08037f04bfa0176a3'
                    }
                    'pub-10-return': {
                        table: 'sys_atf_step'
                        id: '15ea4b5039bc4fbeb47d34dea63bfe6f'
                    }
                    'role-alice': {
                        table: 'sys_user_has_role'
                        id: 'f32ea78929ee41d0bb077a3c1870af84'
                    }
                    'role-bob': {
                        table: 'sys_user_has_role'
                        id: '0a7d9304c50742cd81eeeec626fc60f8'
                    }
                    'role-manon': {
                        table: 'sys_user_has_role'
                        id: 'df45216c936645138daa5f00288afd31'
                    }
                    'suite-public': {
                        table: 'sys_atf_test_suite'
                        id: '6760b383edd64aba93974870f8630756'
                    }
                    'user-alice': {
                        table: 'sys_user'
                        id: '2118d1c8ed944f718355be56cb19ff77'
                    }
                    'user-bob': {
                        table: 'sys_user'
                        id: '9c875f044cd14ed4acb35796fa37a7c0'
                    }
                    'user-manon': {
                        table: 'sys_user'
                        id: 'a4a19aca15a34ae0b36235fa7feee5a5'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0016429ecceb4d20ab26f17514447195'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '01edd39b7d604a8e8d341cf398fb65ca'
                        key: {
                            document_key: 'b2fe1e5f06cc44f197c8def215907a79'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '02e1d57565414ca5be7b10206dbd4c7a'
                        key: {
                            sys_security_acl: '2f09840ae2734edc87444741b78e21df'
                            sys_user_role: {
                                id: '914c99c342764162a1fd0cb68fcacee3'
                                key: {
                                    name: 'x_1606601_f5.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: '06345158fc004da8819bf1904c134147'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: '88ef7999f0db4913ac8ffe8edd9898d9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09f3aa7cdf2c4b249aa6b51fe77a0d3b'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'reserved_quantity'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0a9f7eafafe843f3a1a184bd16ecec2e'
                        key: {
                            document_key: 'a734ef69816944e08037f04bfa0176a3'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0b71e5bc84fe42b8852c83f3fe6c8604'
                        key: {
                            document_key: 'a734ef69816944e08037f04bfa0176a3'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0b74902080414af6a8e6781630ed3058'
                        key: {
                            id: '96de37adf25e4fd3a82c66872ef23ef6'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0b9fa53df4b44592b877240557d8f0a8'
                        key: {
                            document_key: 'c0632eb989df4dd5a47e46f25122392f'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0bc574c08d0e4824a41dd06508232e01'
                        key: {
                            document_key: 'b2fe1e5f06cc44f197c8def215907a79'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0c5f75f5310640babcabc58fa96b13dd'
                        key: {
                            id: 'c3c0a014b29c4f46b68f975fd6c8be14'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0c66a393cb3e4bb0a66e2c107735607e'
                        key: {
                            id: 'a734ef69816944e08037f04bfa0176a3'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0d8cc56013464b75bb1e784247360ae2'
                        key: {
                            id: '75c5ac5ec2f94086a4c371a69fc1c70c'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0ff7280aacdd42e092e075a95edcb614'
                        key: {
                            document_key: 'c3c0a014b29c4f46b68f975fd6c8be14'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: '12dff18089cc41ff8a6d7449719d77b3'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: 'f2115f724d3842f285fe230a8219c9e9'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '12e94ddb16d2490eb6dd43842d8e9b97'
                        key: {
                            document_key: 'fb4be95bfe85428cac9b4cadd2d76bd0'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '13d075df07244bd6b8ecb0e7371b54ed'
                        key: {
                            document_key: 'a734ef69816944e08037f04bfa0176a3'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1606b5a313de403295f30a2623eb6642'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '172d2d7c6d9e430dbdfb2941bdeed66a'
                        key: {
                            id: '42bc1229d15f4f799025409f358c264b'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1907269e2fe746189a01cb3db4fe325e'
                        key: {
                            document_key: '10d63a865b4b411d883b222718ec520e'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1c292b93bcdc499ba00eeba3301d6132'
                        key: {
                            document_key: 'ea371b2cf04140d98dec90e13c23ec19'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1cf0d12f98894787bc86082b524061a0'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d90cbda0428436696ff4b2a91f3208b'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'category'
                            value: 'headset'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1d97b0ea7e89485498ae923b45221c35'
                        key: {
                            document_key: '401113d843de44bc9f581162ee8a33ec'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '212fa8bb8bad4277b25623df3b538252'
                        key: {
                            document_key: '6eb090334d044a518a27e72740b24945'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '23beb45cc71245dc8102995429e358b0'
                        key: {
                            document_key: '0ad0df526067446083260b43693840a1'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2635898a8714456c97ca1b6d60de4ded'
                        key: {
                            document_key: '42bc1229d15f4f799025409f358c264b'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '27159d5368b449ba9dddf16dcd398e5e'
                        key: {
                            document_key: 'db834941087a4bcbbd946727f9602378'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '271f6164b15c4a54bdd35a044b777820'
                        key: {
                            document_key: 'db834941087a4bcbbd946727f9602378'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '29687bbbaf764f5fa719b3952a0018a7'
                        key: {
                            id: '664c19e5d4534df6ac6c3e805eb3c985'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2b023270a1f143f0aae42f733c614cea'
                        key: {
                            document_key: 'bcfff5fb6d9f42ae9630c7f934767c81'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c15ba608a0e4e90a97ba6815bc83c17'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2f02a6af2b754f86832965b071d92eae'
                        key: {
                            document_key: 'c3c0a014b29c4f46b68f975fd6c8be14'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '328b4203f2ab4a1185d3fd65e981511c'
                        key: {
                            sys_security_acl: '1e92b2036d8c404d9cc883814b3ecfc0'
                            sys_user_role: {
                                id: '914c99c342764162a1fd0cb68fcacee3'
                                key: {
                                    name: 'x_1606601_f5.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '361f25efa2cf4332a97975a31917f07b'
                        key: {
                            document_key: '288f8bb517194dfb8da7f2f5e9c0744b'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '372166081fd641d994a3b52593851e29'
                        key: {
                            document_key: 'bcfff5fb6d9f42ae9630c7f934767c81'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3822fbbb61854cbe90ce9ef3630c3dea'
                        key: {
                            document_key: '63a3ff68acdc4e1d8ac32416852de91d'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '39154e68e14a4ba5bcbb3414d41dfb19'
                        key: {
                            id: '64368425bf7a47de83d0b1eab3dcd51e'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3a07354196904701a3cc098a75e905fd'
                        key: {
                            document_key: '6eb090334d044a518a27e72740b24945'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3cd5fe5f80f34acca4f20d87b2bae631'
                        key: {
                            id: '72f1551b248f4e5386ce04dbaaa9058b'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3ee847b9d8d44a868e13443d5a9cdd13'
                        key: {
                            document_key: '23d3b1b59e1547b5a6b274b9e4748cac'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41013161073a4337886c3390d60964b8'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '41345f4998a649ddadaa2d26d2567913'
                        key: {
                            document_key: 'db834941087a4bcbbd946727f9602378'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42f9c63f8eb84f17870a39fa896c3f97'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44254be04ab841dab3675206e2112081'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'requested_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '477f88efaf27495ab11d2e680ffa92f4'
                        key: {
                            id: '9ced56b2de7a40379ea9af2e4fe342ab'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: '47d8c84055f843e39fe60fc87b65c265'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: '220aa043ee4f4f66b8b01d8216fcc386'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4803441bca09432888310378d70de97d'
                        key: {
                            document_key: '72f1551b248f4e5386ce04dbaaa9058b'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '48760238e9d549b69dda0eff371f10b0'
                        key: {
                            document_key: '96de37adf25e4fd3a82c66872ef23ef6'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '488383473e2145c6af9fc1e32962cac8'
                        key: {
                            document_key: '6dbfdd9edaaf4d00a207a2f31b8f5d1d'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '48868324a7b745c7a2cba046a171c0b6'
                        key: {
                            document_key: '6eb090334d044a518a27e72740b24945'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a87f797304846b2bb6b43f436fc9949'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'state'
                            value: 'submitted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4b13f8fce45246c59f1e99079aaf0302'
                        key: {
                            document_key: '6dbfdd9edaaf4d00a207a2f31b8f5d1d'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4b1511e300134e51a3d3f59ab90d98b8'
                        key: {
                            document_key: '64368425bf7a47de83d0b1eab3dcd51e'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4befcdedcdc94d46a68f4e94bb96939e'
                        key: {
                            name: 'x_1606601_f5_item'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4dd2ba0ae86c4e16993a317b579c31ff'
                        key: {
                            id: '15ea4b5039bc4fbeb47d34dea63bfe6f'
                            table: 'var__m_atf_input_variable_17a72288df60220062fe6c7a4df26397'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f604fd03f544d56be0f52ca74ad4a23'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4fd74ff52e624021b67b2dc52f9ef432'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'stock_total'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '50065b34d8674b6487b7bb19d1a5e5c7'
                        key: {
                            document_key: '6eb090334d044a518a27e72740b24945'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5021ae1cb1c942599d8f8a1f1d2aee1f'
                        key: {
                            document_key: 'f82904a1b3c3456f98e6f423f56be580'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '508af0be0019450b961f54935b160bb8'
                        key: {
                            document_key: '75c5ac5ec2f94086a4c371a69fc1c70c'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '50c4983d15944e0eaa7d6f6495d70557'
                        key: {
                            document_key: '664c19e5d4534df6ac6c3e805eb3c985'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '51538f40589f4e1f8647556cc37f7e3a'
                        key: {
                            document_key: '10d63a865b4b411d883b222718ec520e'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '519ebfa3bae8470da77110af2798f3c2'
                        key: {
                            document_key: '72f1551b248f4e5386ce04dbaaa9058b'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '520ebc5c91b0449b994040960b192285'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'stock_total'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '527ce25a9ccf4760991bba076f9dcf9a'
                        key: {
                            document_key: '96de37adf25e4fd3a82c66872ef23ef6'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5281683b2edc492f8299f46cd45017a9'
                        key: {
                            document_key: 'caf890ff578b4f00abbf3d37242c039c'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54b98b3627e64b97866bfbed1fb39d51'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '57e79775f4624091bc6114ef9102bf4a'
                        key: {
                            document_key: '62eaa7f4b1c247b1871a8cd6b2ac03b0'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '590c87a204174925bdd0bb06af82b947'
                        key: {
                            document_key: '63a3ff68acdc4e1d8ac32416852de91d'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5abb9157da624075aec2d8c6c8a88ce7'
                        key: {
                            sys_security_acl: 'b49ba124fb9b45b8bdd8cca6a687e9a7'
                            sys_user_role: {
                                id: '914c99c342764162a1fd0cb68fcacee3'
                                key: {
                                    name: 'x_1606601_f5.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5b987811955a42e1a7ecf09730f0eb69'
                        key: {
                            document_key: '15ea4b5039bc4fbeb47d34dea63bfe6f'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5bd3fb299d6849b88f2d81c478ff3d61'
                        key: {
                            document_key: 'fb4be95bfe85428cac9b4cadd2d76bd0'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5bd559b865704ad89ad1b49779068ab1'
                        key: {
                            document_key: 'caf890ff578b4f00abbf3d37242c039c'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5d3f6ed87f6c4507baf61e01b46d9d55'
                        key: {
                            document_key: '621f2f5fdd8b4eeda08d3f3afbdb89fd'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '60047d88447249cb8e100cfed1347700'
                        key: {
                            document_key: '96de37adf25e4fd3a82c66872ef23ef6'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '60aa082d0492406fa6817870a86b18e9'
                        key: {
                            document_key: '0ad0df526067446083260b43693840a1'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6185a12a92d440c18859f98111fd9c77'
                        key: {
                            document_key: 'f82904a1b3c3456f98e6f423f56be580'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '64776f5f806343b58007efc738284b80'
                        key: {
                            id: '401113d843de44bc9f581162ee8a33ec'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6846de6826a143d297d65d6c41f73a86'
                        key: {
                            document_key: '10d63a865b4b411d883b222718ec520e'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '68e5ae5ddd5b4b518262faf2218ca4ad'
                        key: {
                            document_key: 'caf890ff578b4f00abbf3d37242c039c'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: '69fbbfa7fff944eabcc8d9ae1ea65530'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: '0c697e39df87472a90b8dd1c55e428e3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6a1425dfaaa441288220114ad75b94f8'
                        key: {
                            document_key: 'db834941087a4bcbbd946727f9602378'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6a7dae8a844c459d96f172e76ef8f5ca'
                        key: {
                            document_key: 'bcfff5fb6d9f42ae9630c7f934767c81'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6d20bfdc41f9477bbbc700b3f7c6870b'
                        key: {
                            document_key: '62eaa7f4b1c247b1871a8cd6b2ac03b0'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6d2fca1e7ca2404a85552626cb4c4aee'
                        key: {
                            document_key: '10d63a865b4b411d883b222718ec520e'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6e0dc63c8b5842d09ce4029f6ddf704c'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6e5fd27bbd4a46e1a9ff94d68d63bfa4'
                        key: {
                            document_key: 'fb4be95bfe85428cac9b4cadd2d76bd0'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e95ec9319cd4d86a11a02209ae144be'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '714fb0a31d7045578d7847452135ae65'
                        key: {
                            document_key: 'fb4be95bfe85428cac9b4cadd2d76bd0'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '72e659b5b051412d8294888b0abfc391'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77bfce90a82d4d02944ff1c14806ade8'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'reserved_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '77bfd9854c9842f9a342bec76d1dbf9f'
                        key: {
                            document_key: '401113d843de44bc9f581162ee8a33ec'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '77f5ea61eece49be96331bcc9e7070e7'
                        key: {
                            document_key: 'c0632eb989df4dd5a47e46f25122392f'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '79c79411a9ec402e8752dfaba2fb5adf'
                        key: {
                            id: 'f82904a1b3c3456f98e6f423f56be580'
                            table: 'var__m_atf_input_variable_17a72288df60220062fe6c7a4df26397'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '79d1b1b9b3354efe883ac661d98d3940'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7acfbec8b85d430e925cfb579ead7751'
                        key: {
                            document_key: '64368425bf7a47de83d0b1eab3dcd51e'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7b52c8049e3f4bcb8bcdf9ae63c14337'
                        key: {
                            document_key: 'caf890ff578b4f00abbf3d37242c039c'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7e7be6a24491499d8e6d8d2104a5f3b4'
                        key: {
                            document_key: 'bcfff5fb6d9f42ae9630c7f934767c81'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7eb53fa84920439c9383fb39ca1904c4'
                        key: {
                            id: 'caf890ff578b4f00abbf3d37242c039c'
                            table: 'var__m_atf_input_variable_17a72288df60220062fe6c7a4df26397'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '81151136527a47a790d176174c6910c3'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'state'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '815ada7a454f474c8c78d082ec11b4da'
                        key: {
                            document_key: '288f8bb517194dfb8da7f2f5e9c0744b'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '816eaa5ec029447686454ea1efaf8061'
                        key: {
                            document_key: '63a3ff68acdc4e1d8ac32416852de91d'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '856232ab49d8411493806fb0a4a40af0'
                        key: {
                            document_key: 'f82904a1b3c3456f98e6f423f56be580'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '85951a601106417e982febd2a4724375'
                        key: {
                            document_key: 'fafc5d3d14ad4851985bf1f9dddbe520'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8665116e20e342aca2aee1e95dc9de0e'
                        key: {
                            document_key: 'f82904a1b3c3456f98e6f423f56be580'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '869c985bf90540a795f12d6320204694'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'approver'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '86facf91b04a4d4f89448c20d5146cf3'
                        key: {
                            document_key: 'ea371b2cf04140d98dec90e13c23ec19'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '87ffa9a0898f4b1ca4c8ef533b345203'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '88d498c90d3e46508bc7ff985469102f'
                        key: {
                            document_key: 'b2fe1e5f06cc44f197c8def215907a79'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '88f07311104d4f2fb91fd19241566f24'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'state'
                            value: 'returned'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '896c231f994c4f3c86e72a323d276df8'
                        key: {
                            document_key: '75c5ac5ec2f94086a4c371a69fc1c70c'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8abb4d2fc7f8425298472e5beae42cfd'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'state'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8b435cd79ac341f3956149385be408db'
                        key: {
                            document_key: '42bc1229d15f4f799025409f358c264b'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8f424fb8c4b4434e9cdf7b323b5f78b0'
                        key: {
                            document_key: '96de37adf25e4fd3a82c66872ef23ef6'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '90b63584d9184927ad96355e3c71e376'
                        key: {
                            document_key: 'c3c0a014b29c4f46b68f975fd6c8be14'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '914c42f66a4f4ce7a715114790acb9e0'
                        key: {
                            document_key: '75c5ac5ec2f94086a4c371a69fc1c70c'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '914c99c342764162a1fd0cb68fcacee3'
                        key: {
                            name: 'x_1606601_f5.user'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '96f2d82f0e66452183025587982affd4'
                        key: {
                            document_key: '23d3b1b59e1547b5a6b274b9e4748cac'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: '97b0605c384e4421a1a8a597430140c0'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: '520d163ca1114a4190a8d12b751c2907'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9837665bbc394accbb5f2f554be25c10'
                        key: {
                            document_key: '9ced56b2de7a40379ea9af2e4fe342ab'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9a9a0024ef3b4918a276b5c29475ba6e'
                        key: {
                            id: '10d63a865b4b411d883b222718ec520e'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9b976c2e13df4447b5f6ffe0bc64f54b'
                        key: {
                            document_key: 'ea371b2cf04140d98dec90e13c23ec19'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9c8a3326c8a8414184e07fc200cc762f'
                        key: {
                            document_key: '9ced56b2de7a40379ea9af2e4fe342ab'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9e9734e433064d7c8f35b7b2cd20aaf3'
                        key: {
                            document_key: 'a72a3761a58a42e3b29d16b50573dfde'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a04cc871919143e7ba59d2c95a9f1f34'
                        key: {
                            document_key: 'fafc5d3d14ad4851985bf1f9dddbe520'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a4d405ae275e436ca7fbd9cb401f5850'
                        key: {
                            sys_security_acl: 'daf6ff0acc1d4c0d91f83d302aece2c6'
                            sys_user_role: {
                                id: '914c99c342764162a1fd0cb68fcacee3'
                                key: {
                                    name: 'x_1606601_f5.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a870e32a3d1c48459c27db4a08d9f2a6'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'category'
                            value: 'screen'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a8bfb68d2ae144659c4deb2e08d5e32d'
                        key: {
                            id: 'ea371b2cf04140d98dec90e13c23ec19'
                            table: 'var__m_atf_input_variable_17a72288df60220062fe6c7a4df26397'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a97c32cfefb74bab8e93daf068a9a50a'
                        key: {
                            document_key: '9ced56b2de7a40379ea9af2e4fe342ab'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a9d963bcf81045c2ae47613cb21713d5'
                        key: {
                            document_key: '62eaa7f4b1c247b1871a8cd6b2ac03b0'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aaf37897b76241b6a48b869731920789'
                        key: {
                            document_key: 'c3c0a014b29c4f46b68f975fd6c8be14'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: 'ac095bd145034ee1815cb359d9ee8adf'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: '7882acdab89543bfa568183cb03e8f77'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'adde224af046479198d699981ab44060'
                        key: {
                            id: '621f2f5fdd8b4eeda08d3f3afbdb89fd'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'af1748d678744872bca6bc5fcae02d99'
                        key: {
                            document_key: 'a72a3761a58a42e3b29d16b50573dfde'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b0fde28bb51841e89a1eea0b196212fe'
                        key: {
                            document_key: 'ea371b2cf04140d98dec90e13c23ec19'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b2b65f3533ea46119e593d2107cf8d7c'
                        key: {
                            document_key: '621f2f5fdd8b4eeda08d3f3afbdb89fd'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b36bb9c0e0b444588018b267757e0102'
                        key: {
                            document_key: 'b2fe1e5f06cc44f197c8def215907a79'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b37f376c12de4245bde9289a07ac7cb6'
                        key: {
                            document_key: '42bc1229d15f4f799025409f358c264b'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b3d48662c7cf4df980add6b7c6356eb6'
                        key: {
                            document_key: '64368425bf7a47de83d0b1eab3dcd51e'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b3def635af4e47e5a0cce7c535a7fa02'
                        key: {
                            document_key: '9ced56b2de7a40379ea9af2e4fe342ab'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4f46acba63b4dba9f9d092e2ba2babc'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b51795be5c5c4a8bb85780bb3758396f'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'max_loan_days'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b60529292b5f41ea9557b175ce378b86'
                        key: {
                            document_key: '0ad0df526067446083260b43693840a1'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b66e2855907e4a139f8104d4e4ae3c9a'
                        key: {
                            id: 'fb4be95bfe85428cac9b4cadd2d76bd0'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b82c786734b240fba5bbef3e73d51ae4'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8e6e7ac71514b5cb25d3dfd378470f7'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9959138bebc4c12a8eb4bad1f8c5454'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ba0b54784f1f4b919d1ae92562c76702'
                        key: {
                            id: 'fafc5d3d14ad4851985bf1f9dddbe520'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ba8e3ea925104bf7b0919aeda5390692'
                        key: {
                            document_key: 'caf890ff578b4f00abbf3d37242c039c'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: 'bb5f5e49339d410598b3b25c1bd98ebb'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: 'b2d04150e1694636828ed668e63929e9'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bbbc2b9d4321466eafb5e7b01fd13a65'
                        key: {
                            document_key: '63a3ff68acdc4e1d8ac32416852de91d'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbf40d661e8a4ba884b071e497153e07'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bc34f6a7755a4d2284c9ff54c97de80f'
                        key: {
                            name: 'x_1606601_f5_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bcc5bbabccfd4c439f75d4c93d9ff78e'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'max_loan_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'bcd0003d95534eed98aabec0d71bea8a'
                        key: {
                            id: '62eaa7f4b1c247b1871a8cd6b2ac03b0'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd1a6f634086473d9db3d19d3e4d80dd'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'be334e61071e4665972f7409d551c35c'
                        key: {
                            document_key: 'fafc5d3d14ad4851985bf1f9dddbe520'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c10942374eb34cf68d71ad6a41ae5cc4'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c2b3f65959d5481d953bbca3440dd4a2'
                        key: {
                            document_key: 'c0632eb989df4dd5a47e46f25122392f'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4f33542802743f7af8d031f71577368'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c67e08241318412bb270a5149b3bb88a'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c7b95b03778f41968258ae80887bc3d5'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'category'
                            value: 'laptop'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c9499d7ea6e747b9a7f1baf626913503'
                        key: {
                            document_key: 'a72a3761a58a42e3b29d16b50573dfde'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: 'c97d40af5dbf4518b4345198cfddef40'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: '24df6a49a34e477685b94d461ba5a209'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c9e9f7e788be480280fa677a7ba94863'
                        key: {
                            document_key: '15ea4b5039bc4fbeb47d34dea63bfe6f'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ca50d8c4c0744613bed9f6ffef98af54'
                        key: {
                            id: '6dbfdd9edaaf4d00a207a2f31b8f5d1d'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cb728b5778f842a9922a7aa5d83468f6'
                        key: {
                            document_key: '23d3b1b59e1547b5a6b274b9e4748cac'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ce1f3949beec46a9ae8b583c2c6a8c5e'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'state'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cf1b5cf563414b0786fe6202a0e2290a'
                        key: {
                            document_key: 'f82904a1b3c3456f98e6f423f56be580'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd26d4b64a3bd405ca3ab0818a14a5bf7'
                        key: {
                            id: 'b2fe1e5f06cc44f197c8def215907a79'
                            table: 'var__m_atf_input_variable_17a72288df60220062fe6c7a4df26397'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd2b3ec45c61e4044a9835bab8bc720a0'
                        key: {
                            document_key: '0ad0df526067446083260b43693840a1'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd2eb6bfdf7134b4faa31d1b25af57d12'
                        key: {
                            document_key: '42bc1229d15f4f799025409f358c264b'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd53b933597a6449c9ce840502b542181'
                        key: {
                            document_key: '15ea4b5039bc4fbeb47d34dea63bfe6f'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd5cbb2b7aae14c97aa08090a38bd522e'
                        key: {
                            document_key: '6dbfdd9edaaf4d00a207a2f31b8f5d1d'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd5ef5b7672054d4fafbaf59982215bfe'
                        key: {
                            document_key: 'b2fe1e5f06cc44f197c8def215907a79'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd63e4841f1454dfdae98bdab7c4a61f6'
                        key: {
                            document_key: 'fafc5d3d14ad4851985bf1f9dddbe520'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd6ea69c1ed414bf7821a878cad2ef632'
                        key: {
                            document_key: 'ea371b2cf04140d98dec90e13c23ec19'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'da45a3cd83d748ca9aed43e0938a19c3'
                        key: {
                            document_key: 'a72a3761a58a42e3b29d16b50573dfde'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'da56b6c1f7fa49b2ada062d0616c53dd'
                        key: {
                            id: 'db834941087a4bcbbd946727f9602378'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dba3769560e24553b9520bc32deb296b'
                        key: {
                            document_key: 'fafc5d3d14ad4851985bf1f9dddbe520'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dc378583f0e245728b5647aad7bba717'
                        key: {
                            document_key: 'a734ef69816944e08037f04bfa0176a3'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dc45b3b975dd4ff6b5cbee1076338990'
                        key: {
                            document_key: '664c19e5d4534df6ac6c3e805eb3c985'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddd86fa762b142a1992d40a029d5ed89'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'de2b02166a2c4904a466aa064ab8b1a9'
                        key: {
                            document_key: '288f8bb517194dfb8da7f2f5e9c0744b'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de6ef02bec39455ebbe6d8948bd628eb'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'requested_for'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'dea635e1f4fe4ee5b842907c28cc1d0d'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: 'dfd69d154ce64df5a0fa9d66fd64cb47'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: 'e98e91fb78654dac8297efc3186dd375'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'e08f4709ce394459a43815363d8a626a'
                        key: {
                            category: 'x_1606601_f5_loan_request'
                            prefix: 'LOAN'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e0a09186deb445a9a800a97263ea2fa4'
                        key: {
                            document_key: '64368425bf7a47de83d0b1eab3dcd51e'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e27f871e2a1d45858cf399f0cc84d936'
                        key: {
                            document_key: '10d63a865b4b411d883b222718ec520e'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e30ea91ae82143b19c1f6887c04f285e'
                        key: {
                            document_key: '75c5ac5ec2f94086a4c371a69fc1c70c'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e4fd70ba0d8c4f75a5e2c91e91b3ed59'
                        key: {
                            document_key: '72f1551b248f4e5386ce04dbaaa9058b'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e5e3170f5106498cb1626181aa009476'
                        key: {
                            document_key: '72f1551b248f4e5386ce04dbaaa9058b'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e8179588705444c7a965358fc936f7c0'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'state'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e918bf01566843adaac37ef712ec158b'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ed28defca1374a63bd2a3e06cf6c4fa6'
                        key: {
                            document_key: '15ea4b5039bc4fbeb47d34dea63bfe6f'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ee45a9189fdb4be9825611809ae2c7fa'
                        key: {
                            document_key: '72f1551b248f4e5386ce04dbaaa9058b'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f0308909dd284d3c89321b464871534c'
                        key: {
                            document_key: '62eaa7f4b1c247b1871a8cd6b2ac03b0'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f2cbbe387c594b54a6e013873650a535'
                        key: {
                            name: 'x_1606601_f5_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f3c9994b657b42949830b33dc7aa48b7'
                        key: {
                            document_key: 'c0632eb989df4dd5a47e46f25122392f'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: 'f59984cb5aec4837be65eeac4f08c0aa'
                        key: {
                            test_suite: '6760b383edd64aba93974870f8630756'
                            test: 'c7895f8c141d402ea8a209aab856717b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f6029ac63a884911bb81e373fdf26d48'
                        key: {
                            document_key: '15ea4b5039bc4fbeb47d34dea63bfe6f'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f644b7ab0c344f29bb86c3888b2f4c9f'
                        key: {
                            document_key: '6dbfdd9edaaf4d00a207a2f31b8f5d1d'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f65e9997f2c24bc8be36dfa08816ae29'
                        key: {
                            document_key: '9ced56b2de7a40379ea9af2e4fe342ab'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f7871f76e2e44898afd392a2221c617e'
                        key: {
                            document_key: '23d3b1b59e1547b5a6b274b9e4748cac'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f790ad322d754873aeda6edcfb5a2338'
                        key: {
                            document_key: '288f8bb517194dfb8da7f2f5e9c0744b'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f90f3515869047a2a1ab34a47baccaad'
                        key: {
                            document_key: '664c19e5d4534df6ac6c3e805eb3c985'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fb1d770af4424d7a9deda4dd04210ca6'
                        key: {
                            document_key: '664c19e5d4534df6ac6c3e805eb3c985'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb36d5c8777e457b980b4166ec7f0cb5'
                        key: {
                            name: 'x_1606601_f5_loan_request'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fc0e2d79901849e7964639b0509fa6b5'
                        key: {
                            document_key: '64368425bf7a47de83d0b1eab3dcd51e'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fd4b9e1f8ba4478a9f3e15fcfb4d1b59'
                        key: {
                            document_key: '42bc1229d15f4f799025409f358c264b'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                ]
            }
        }
    }
}
