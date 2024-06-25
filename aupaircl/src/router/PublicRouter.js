import Login from '../views/Login/Login.vue'
import LandPage from '../views/LandPage/LandPage.vue'
import Contacto from '../views/Contact/Contacto.vue'
import SearchFamily from '../views/SearchFamily/SearchFamily.vue'
import SearchAuPair from '../views/SearchAuPair/SearchAuPair.vue'
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
            },
            {
                
                    path: '/contacto',
                    name: 'contacto',
                    component: Contacto,
                    meta:{
                        title: 'Contacto',
                    }
                
            },
            {
                path: '/encontrar-familia',
                name: 'encontrarF',
                component: SearchFamily,
                meta:{
                    title: 'Encontrar Familia',
                }
            },
            {
                path: '/encontrar-aupair',
                name: 'encontrarA',
                component: SearchAuPair,
                meta:{
                    title: 'Encontrar Aupair',
                }
            }

        ]
    }
]