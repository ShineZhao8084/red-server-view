import { BlankLayout, BasicLayout } from '../../red-server/src/layouts'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: BlankLayout,
        meta: { title: 'menu.home' },
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../../red-server/src/views/user/login')
            },
            {
                path: 'home',
                name: 'home',
                component: BasicLayout,
                children: [
                    {
                        path: 'tools/develop/token-mainacct',
                        name: 'get-token-mainacct',
                        component: () => import('./views/tools/develop/get-token-mainacct')
                    },
                    {
                        path: 'tools/develop/back/gw-approve-follow',
                        name: 'gw-approve-follow',
                        component: () => import('./views/tools/develop/back/gw-approve-follow')
                    },
                    {
                        path: 'tools/develop/back/sql-generator',
                        name: 'sql-generator',
                        component: () => import('../../red-server/src/views/tools/develop/back/sql-generator')
                    }
                ]
            },

        ]
    },

];

const router = createRouter({
    history: createWebHashHistory('/'),
    routes
});

export {
    router
}