import { iMenuContent } from "../interfaces/menu.interface";

export const ApplicationMenu: iMenuContent[] = [
    {
        name: 'Overview',
        menu: [
            {
                name: 'Home',
                path:'home',
                icon: 'appstore',
                // children: [
                //     {
                //         name: 'Test',
                //         path: ''
                //     },
                //     {
                //         name: 'Test',
                //         path: ''
                //     }
                // ]
            },
            {
                name: 'Theme Configuration',
                path: 'theme-configuration',
                icon: 'appstore'
            },
            {
                name: 'Lazy loading',
                path: 'lazy-loading',
                icon: 'appstore'
            },
            {
                name: 'Reactive Forms',
                path: 'reactive-forms',
                icon: 'appstore'
            },
           
        ]
    }
]