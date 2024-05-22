import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminRouter from './AdminRouter'
import AuPairRouter from './AuPairRouter'
import PublicRouter from './PublicRouter'
import FamilyRouter from './FamilyRouter'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: {
            render (c){
                return c("router-view")
            }
        },
        children:[
            ...PublicRouter.map(route => {
                route.meta.requireAuth = false;
                return { ...route };
            }),
            ...AdminRouter.map(route => {
                route.meta.requireAuth = true
                return {...route}
            }),
            ...AuPairRouter.map(route => {
                route.meta.requireAuth = true
                return {...route}
            }),
            ...FamilyRouter.map(route => {
                route.meta.requireAuth = true
                return {...route}
            })
        ]
    },
  
    {
        path: '/*',
        name: '404',
        component: ()=> import('../views/Error404Page/Error404.vue')
    }
    
]

const router = new VueRouter({
    mode: 'history',routes
})

router.beforeEach((to, from, next)=> {
 
    next()
})

export default router