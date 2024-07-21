import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../views/LandingPage/LandingPage.vue';
import LoginPage from '../views/LoginPage/LoginPage.vue';
import PPDBPage from '../views/PPDBPage/PPDBPage.vue';
import PPDBRegistration from '../views/PPDBPage/PPDBRegistration.vue';
import DashboardView from '../views/Dashboard/DashboardPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Landing Page',
            path: '/',
            component: LandingPage
        },
        {
            name: 'Login',
            path: '/login',
            component: LoginPage
        },
        {
            name: 'PPDB',
            path: '/PPDB',
            component: PPDBPage
        },
        {
            name: 'PPDB Registration',
            path: '/PPDB-Registration',
            component: PPDBRegistration
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView
        },
    ]
})

export default router