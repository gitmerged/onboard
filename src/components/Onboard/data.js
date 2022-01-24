export const steps = [
    {
        heading: {
            title: 'Welcome! First things first...',
            subtitle: 'You can always change them later.',
        },
        form: {
            inputs: [{
                    name: 'fullName',
                    label: 'Full Name',
                    type: 'text',
                    placeholder:'Steve Jobs',
                    value: ''
                },
                {
                    name: 'displayName',
                    label: 'Display Name',
                    type: 'text',
                    value: '',
                    placeholder:'Steve',
                }

            ],
            button: {
                name: 'Create Workspace'
            }
        }
    },
    {
        heading: {
            title: 'Let\'s setup a home for all your work',
            subtitle: 'You can always create another workspace later.',
        },
        form: {
            inputs: [{
                    name: 'workspaceName',
                    label: 'Workspace Name',
                    type: 'text',
                    value: '',
                    placeholder: 'Eden'
                },
                {
                    name: 'workspaceUrl',
                    label: 'Workspace URL',
                    type: 'text',
                    prepend: 'www.eden.com/',
                    optional: true,
                    value: '',
                    placeholder:'Example'
                }

            ],
            button: {
                name: 'Create Workspace'
            }
        }
    },
    {
        heading: {
            title: 'How are you planning to use Eden?',
            subtitle: 'We\'ll streamline your experience accordingly',
        },
        form: {
            inputs: [{
                    name: 'usageType',
                    type: 'customRadio',
                    options: [{
                        icon: '',
                        title: 'For Myself',
                        subtitle: 'Write better. Think more clearly. Stay organized.',
                    },{
                        icon: '',
                        title: 'With my team',
                        subtitle: 'Wikis, docs, tasks & projects, all in one place.'
                    }],
                    value: 0
                },
            ],
            button: {
                name: 'Create Workpace'
            }
        }
    },
    {
        heading: {
            title: 'Congratulations, {{displayName}}!',
            subtitle: 'You have completed onboarding, you can start using Eden!',
            replace: [{key:'displayName', index:0}]
        },
        form: {
            
            button: {
                name: 'Launch Eden'
            }
        }
    },

];
