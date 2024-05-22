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
                component: () => import('../views/LandPage/LandPage.vue'),
                meta:{
                    title: 'Inicio',
                }
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('../views/Login/Login.vue'),
                meta:{
                    title: 'Login',
                }
            }
        ]
    }
]