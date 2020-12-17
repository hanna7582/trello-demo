import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
    store.getters.isAuth ? next() : next(loginPath)
}

const routes = [
    {
        path: '/',
        component: loadView('Home'),
        beforeEnter: requireAuth,
    },
    {
        path: '/login',
        component: loadView('Login'),
    },
    {
        path: '/b/:bid',
        component: loadView('Board'),
        beforeEnter: requireAuth,
        children: [
            {
                path: 'c/:cid',
                component: loadView('Card'),
                beforeEnter: requireAuth,
            },
        ],
    },
    {
        path: '*',
        component: loadView('NotFound'),
    },
]

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `../components/${view}.vue`)
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
