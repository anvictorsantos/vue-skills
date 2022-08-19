import Vue from 'vue'
import Router from 'vue-router'
import MySkills from '@/components/MySkills.vue'
import About from '@/components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: MySkills
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    },
  ]
})