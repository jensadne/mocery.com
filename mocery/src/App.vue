<template>
<div>
<!-- put logo here -->
  </div>
  <div>
	  <router-link to="/bricksnpieces">Bricks&amp;Pieces</router-link> |
	  <router-link to="/set">Sets</router-link>
  </div>
  <div>
  	<router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './modules/home/pages/Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
