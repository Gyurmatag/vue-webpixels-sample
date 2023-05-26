import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Search from '../views/Search.vue';
import Register from "@/views/Register.vue";

const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/search', name: 'search', component: Search },
    { path: '/register', name: 'register', component: Register },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
