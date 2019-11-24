<template>
<div class="container">
  <div class="input-group">
    <input type="text" class="form-control" v-model="search" placeholder="Search..."/>
  <button class="btn btn-secondary" type="button" v-on:click="getRecipe()"> Search </button>
  </div>
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
      errors: [],
      search: []
    }
  },
  created() {
    axios.get(url + apiUrl)
    .then(response => { this.recipes = response.data.results })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    getRecipe() {
      axios.get(url + apiUrl+ '?i=' + this.search)
      .then(response => { this.recipes = response.data.results})
      .catch(e=>{this.errors.push(e)})
    }
  }
}
</script> 