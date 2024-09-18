<template>
  <div class="wrapper">
    <Navbar/> 
    <main class="container-fluid">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
// Importing Navbar component from the components folder
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}

</script>

<style>
main {
  background-color: rgb(9, 9, 51);
  height: 100%; /* Full viewport height */
}
</style>
