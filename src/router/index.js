import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../views/LandingPage/LandingPage.vue';
import LoginPage from '../views/LoginPage/LoginPage.vue';
import PPDBPage from '../views/PPDBPage/PPDBPage.vue';
import PPDBRegistration from '../views/PPDBPage/PPDBRegistration.vue';
import DashboardView from '../views/Dashboard/DashboardPage.vue'
import CrudPage from '../views/MainPage/CrudPage.vue'
import Examination from '../views/Examination/Examination.vue'
import AddExamination from '../views/Examination/AddExamination.vue'
import ViewExamination from '../views/Examination/ViewExamination.vue'
import NotFoundView from '../views/NotFound/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'Not Found',
            component: NotFoundView
        },
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
        {
            name: 'Add Examination',
            path: '/add-examination',
            component: AddExamination
        },
        {
            name: 'Add Examination',
            path: '/add-examination',
            component: AddExamination
        },
        {
            name: 'View Examination',
            path: '/view-examination',
            component: ViewExamination
        },

    ]
})

export default router