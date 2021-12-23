import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'
import Price from '@/components/Price'
import About from '@/components/About'
import Contacts from '@/components/Contacts'





export default new VueRouter({
    routes: [{
        path: '/home',
        component: Home
    },

    {
        path: '/price',
        component: Price
    },

    {
        path: '/portfolio',
        component: Portfolio
    },

    {
        path: '/about',
        component: About
    },

    {
        path: '/contacts',
        component: Contacts
    },


    ],

    mode: "history"

});