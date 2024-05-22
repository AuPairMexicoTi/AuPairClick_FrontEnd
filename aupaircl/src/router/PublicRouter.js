export default [
    {
        path: '/',
        name: '',
        redirect:'/home',
        component: () => import('../layouts/PublicLayout.vue'),
        meta:{
            title: 'Home',
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/LandPage/LandPage.vue'),
                meta:{
                    title: 'Inicio',
                }
            }
        ]
    }
]