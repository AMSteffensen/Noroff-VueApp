import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import RecipeComponent from '@/components/RecipeComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
     {
       path: '/recipe/:title',
       name: 'Recipe',
       component: RecipeComponent
     }
  ]
})
