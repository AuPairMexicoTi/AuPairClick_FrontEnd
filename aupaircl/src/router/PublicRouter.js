import Login from '../views/Login/Login.vue'
import LandPage from '../views/LandPage/LandPage.vue'
export default [
    {
        path: '/',
        name: '',
        redirect:'/Inicio',
        component: () => import('../layouts/PublicLayout.vue'),
        meta:{
            title: 'Inicio',
        },
        children: [
            {
                path: '/Inicio',
                name: 'home',
                component: LandPage,
                meta:{
                    title: 'Inicio',
                }
            },
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta:{
                    title: 'Login',
                }
            }
        ]
    }
]