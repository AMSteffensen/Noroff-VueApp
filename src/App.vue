<template>
  <div id="app">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link to="/recipe">Recipe</router-link>
    <router-view/>
    <Recipies />
  </div>
</template>

<script>
import RecipeComponent from './components/RecipeComponent.vue'

export default {
  name: 'App',
  components: {
    'Recipies': RecipeComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
