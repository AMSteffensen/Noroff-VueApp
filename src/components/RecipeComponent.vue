<template>
<div class="container">
  <input type="text" />
  <button class="btn btn-primary" type="button"> Search </button>
  <article class="card" v-for="recipe in recipes" :key="recipe.title">
      <div class="card-body">
        <h1>{{ recipe.title }}</h1>
        <a :href="recipe.href" :title="recipe.title"> <img :src="recipe.thumbnail" /> </a>
      <p  class="card-text":key="recipe.ingredients">{{ recipe.ingredients }}</p>
      <a href="/recpie" class="btn btn-primary">Read more</a>
      </div>
  </article>
</div>
</template>

<script>
import axios from 'axios';
const url = "https://cors-anywhere.herokuapp.com/"; // Needed for Unblocking Cross-Origin request
const apiUrl = "http://www.recipepuppy.com/api/";
export default {
  data() {
    return {
      recipes: [],
      errors: []
    }
  },
  created() {
    axios.get(url + apiUrl)
    .then(response => { this.recipes = response.data.results })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script> 