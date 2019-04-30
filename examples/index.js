import Vue from 'vue'
import Router from 'vue-router'
import routers from './route.js'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: '/gecko',
    ...routers,     
    // router: [
    //     // {
    //     //     path: '/a',
    //     //     name: 'root',
    //     //     redirect: { name: 'index'}
    //     // },
    //     ...routers
    // ]
})