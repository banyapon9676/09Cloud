<template>
  <div class="home container ">
    <b-card>
    <h2>Register</h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    </b-card>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
