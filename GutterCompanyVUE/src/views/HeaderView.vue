<template>
  <header class="header">
  </header>
    <div class="nav">
      <router-link v-bind:to="{ name: 'home' }" class="nav-link">Home</router-link>
      <router-link v-bind:to="{ name: 'schedule' }" class="nav-link">Schedule</router-link>
      <router-link v-bind:to="{ name: 'login' }" v-if="!$store.state.token" class="nav-link">Login</router-link>
      <router-link v-bind:to="{ name: 'register' }" v-if="!$store.state.token" class="nav-link">Register</router-link>
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token" class="nav-link">Logout</router-link>
      <router-link v-bind:to="{ name: 'about' }" class="nav-link">About</router-link>
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
<<<<<<< HEAD
.img {
  background-image: url("../assets/img/gutterlogo.png");
  height: 20rem; /* You may adjust the height as needed */
  width: 100%;
  background-size: 100% 250%; /* Stretch the image horizontally, maintain aspect ratio */
  background-repeat: no-repeat;
  background-position: center center; /* Center the image */
=======

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-image: url("../assets/img/Blakegutter.webp");
  background-repeat: no-repeat;
  background-size: 127rem  20rem;
  background-position: center;
  height: 20rem;
  background-color: rgba(73, 73, 73, 0.71);
>>>>>>> 29ae64fc01984a00865b8ccb1a2900f3eca84ad0
}

.header {
  width: 100%; /* Ensure the header spans the entire width */
}
.nav {
  display: flex;
<<<<<<< HEAD
  justify-content: space-around;
  align-items: center;
  padding: 1px;
  height: 3rem;
}

.nav-link {
  color: #000000;
=======
  justify-content: space-between;
  margin-top: 20rem;
  background-color: rgb(0, 160, 213);

}

.nav-link {
  color: white;
>>>>>>> 29ae64fc01984a00865b8ccb1a2900f3eca84ad0
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
<<<<<<< HEAD
  border: none;
  background-color: #3498db;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #2980b9;
=======
  font-weight: bold;
>>>>>>> 29ae64fc01984a00865b8ccb1a2900f3eca84ad0
}

</style>