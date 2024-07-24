import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../views/LandingPage/LandingPage.vue';
import LoginPage from '../views/LoginPage/LoginPage.vue';
import PPDBPage from '../views/PPDBPage/PPDBPage.vue';
import PPDBRegistration from '../views/PPDBPage/PPDBRegistration.vue';
import DashboardView from '../views/Dashboard/DashboardPage.vue'
import CrudPage from '../views/MainPage/CrudPage.vue'
import Examination from '../views/Examination/Examination.vue'

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
            name: 'dashboard',
            path: '/dashboard',
            component: DashboardView
        },
        {
            name: 'crud',
            path: '/crud',
            component: CrudPage
        },
        {
            name: 'examination',
            path: '/examination',
            component: Examination
        },

    ]
})

export default router