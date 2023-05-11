import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Search from '../views/Search.vue';

const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/search', name: 'dropdown', component: Search },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
