export default [
    {
        path: '/',
        component: () => import('../layout/home.vue'),
        children: [
            {
                path: '/',
                component: () => import('../views/index.vue'),
                meta:{
                    keepAlive: true
                }
            },{
                path: '/search',
                component: () => import('../views/search.vue'),
            },
            {
                path: '/list',
                component: () => import('../views/list/list.vue'),
                meta:{
                    title: '着迷网话题详情页',
                    keepAlive: false
                }
            },
            {
                path: '/news',
                component: () => import('../views/list/news.vue'),
            },
            {
                path: '/report',
                component: () => import('../views/list/report.vue'),
            },
            {
                path: '/meeting',
                component: () => import('../views/list/meeting.vue'),
            },
            {
                path: '/video',
                component: () => import('../views/list/video.vue'),
            },
            {
                path: '/aboutlist',
                component: () => import('../views/aboutList.vue'),
            },
            {
                path: '/aboutprofile',
                component: () => import('../views/aboutProfile.vue'),
            },
            {
                path: '/aboutframework',
                component: () => import('../views/aboutFramework.vue'),
            },
            {
                path: '/aboutform',
                component: () => import('../views/aboutForm.vue'),
            },
            {
                path: '/content/content',
                component: () => import('../views/content/content.vue'),
            },
            {
                path: '/content/report',
                component: () => import('../views/content/report.vue'),
            },
            {
                path: '/content/video',
                component: () => import('../views/content/video.vue'),
            }, 
            {
                path: '/content/meeting',
                component: () => import('../views/content/meeting.vue'),
            },
            {
                path: '/user',
                component: () => import('../views/user/user'),
            },
        ]
    }
];