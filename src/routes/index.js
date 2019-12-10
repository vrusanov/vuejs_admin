import Vue from 'vue';
import VueRouter from 'vue-router';
// import Users from '../components/UsersComponent';
import Users from "../components/Users"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/users',
            name: 'Users',
            component: Users,
        },
        // {
        //       path: '/users_page',
        //       name: 'Users',
        //       component: Users
        // },


    ],
});

export default router;
