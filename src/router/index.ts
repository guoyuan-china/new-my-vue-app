// src/router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Mytestpage from '../views/MyTestPage.vue'
// import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }, {
        path: '/mytestpage',
        name: 'mytestpage',
        component: Mytestpage,
    },
    // { path: '/about', component: About }
];

const index = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default index;