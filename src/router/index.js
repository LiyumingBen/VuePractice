import Vue from 'vue';
import Router from 'vue-router';
import VueRouter1 from '@/components/VueRouter/VueRouter1';
import VueRouter2 from '@/components/VueRouter/VueRouter2';
import Login from '@/components/VueRouter/Login';
import Logout from '@/components/VueRouter/Logout';
import Index from '@/components/VueRouter/Index';
import Course from '@/components/VueRouter/Course';
import Teacher from '@/components/VueRouter/Teacher';
import Student from '@/components/VueRouter/Student';
import VideoDownLoad from '@/components/VueRouter/VideoDownLoad';
import Plan from '@/components/VueRouter/Plan';
import School from '@/components/VueRouter/School';
import AboutMe from '@/components/VueRouter/AboutMe';
import Community from '@/components/VueRouter/Community';
import Employment from '@/components/VueRouter/Employment';
import HappyNews from '@/components/VueRouter/HappyNews';
import Way from '@/components/VueRouter/Way';
import EliteTalk from '@/components/VueRouter/EliteTalk';
import Java from '@/components/VueRouter/ChildrenRouter/Java';
import Web from '@/components/VueRouter/ChildrenRouter/Web';
import Android from '@/components/VueRouter/ChildrenRouter/Android';
Vue.use(Router);
// history.back()
export default new Router({
    mode: "history",
    linkActiveClass: "active",
    routes: [
       /* {
            path: '/',
            name: 'VueRouter1',
            component: VueRouter1
        },
        {
            path: '/benben',
            name: 'VueRouter2',
            component: VueRouter2
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/logout',
            name: 'Logout',
            component: Logout
        },*/
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/course',
            name: 'Course',
            component: Course,
            redirect: "/course/java",
            children: [
                {
                    path: 'java',
                    name: 'Java',
                    component: Java
                },
                {
                    path: 'web',
                    name: 'Web',
                    component: Web
                },
                {
                    path: 'android',
                    name: 'Android',
                    component: Android
                }
            ],
        },
        {
            path: '/teacher',
            name: 'Teacher',
            component: Teacher
        },
        {
            path: '/student',
            name: 'Student',
            component: Student
        },
        {
            path: '/videos',
            name: 'VideoDownLoad',
            component: VideoDownLoad
        },
        {
            path: '/plan',
            name: 'Plan',
            component: Plan
        },
        {
            path: '/school/:name',
            name: 'School',
            component: School
        },
        {
            path: '/aboutme/:name/:age',
            name: 'AboutMe',
            component: AboutMe
        },
        {
            path: '/community',
            name: 'Community',
            component: Community
        },
        {
            path: '/happyNews',
            name: 'HappyNews',
            component: HappyNews
        },
        {
            path: '/employment',
            name: 'Employment',
            component: Employment
        },
        {
            path: '/way',
            name: 'Way',
            component: Way
        },
        {
            path: '/elitetalk',
            name: 'EliteTalk',
            component: EliteTalk
        },
    ]
});
