<template>
  <div class ="img">
  <header class="header">
    <div class="nav">
      <router-link v-bind:to="{ name: 'home' }" class="nav-link">Home</router-link>
      <router-link v-bind:to="{ name: 'schedule' }" class="nav-link">Schedule</router-link>
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
  height: 20rem;
  width: 100%;
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center center;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
  height: 3rem;
}

.nav-link {
  color: #0e0e0e;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1.6rem;
}

</style>