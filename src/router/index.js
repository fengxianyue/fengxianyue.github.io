// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home/index.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Blog/index.vue')
    },
    {
        path: '/categories',
        name: 'Categories',
        component: () => import('../views/Categories/index.vue')
    },
    {
        path: '/tags',
        name: 'Tags',
        component: () => import('../views/Tags/index.vue')
    },
    {
        path: '/friends',
        name: 'Friends',
        component: () => import('../views/Friends/index.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;