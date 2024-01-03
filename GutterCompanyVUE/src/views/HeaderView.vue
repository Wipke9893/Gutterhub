<template>
  <div class ="img">
  <header class="header">
    <div class="nav">
      <router-link v-bind:to="{ name: 'home' }" class="nav-link">Home</router-link>
      <router-link v-bind:to="{ name: 'login' }" v-if="!$store.state.token" class="nav-link">Login</router-link>
      <router-link v-bind:to="{ name: 'register' }" v-if="!$store.state.token" class="nav-link">Register</router-link>
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token" class="nav-link">Logout</router-link>
      <router-link v-bind:to="{ name: 'about' }" class="nav-link">About</router-link>
    </div>
  </header>
  </div>

</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
}
</script>

<style scoped>
.img {
  background-image: url("../assets/img/gutterlogo.png");
  height: 20rem; /* You may adjust the height as needed */
  width: 100%;
  background-size: 100% 250%; /* Stretch the image horizontally, maintain aspect ratio */
  background-repeat: no-repeat;
  background-position: center center; /* Center the image */
}

.header {
  width: 100%; /* Ensure the header spans the entire width */
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1px;
  height: 3rem;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  border: none;
  background-color: #3498db;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #2980b9;
}

</style>