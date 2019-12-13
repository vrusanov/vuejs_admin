import Vue from 'vue';
import VueRouter from 'vue-router';
// import Users from '../components/UsersComponent';
import Users from "../components/Users"
// import Home from "../components/Home"
import EditUser from "../components/EditUser"


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
        //       path: '/',
        //       name: 'home',
        //       component: Home,
        // },
        {
            path: '/edit',
            name: 'edit',
            component: EditUser,
        },


    ],
});

export default router;
