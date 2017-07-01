import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import About from '@/pages/About'
import Books from '@/pages/Books'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})
