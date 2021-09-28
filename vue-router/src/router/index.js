import VueRouter from 'vue-router'

import allFilmsPage from '../pages/allFilmsPage'
import mainPage from '../pages/mainPage'

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: allFilmsPage
        },
        {
            path: '/',
            component: mainPage
        }
    ]
})