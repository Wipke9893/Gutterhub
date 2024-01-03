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
}

.header {
  width: 100%; /* Ensure the header spans the entire width */
}
.nav {
  display: flex;
  justify-content: space-between;
  margin-top: 20rem;
  background-color: rgb(0, 160, 213);

}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  font-weight: bold;
}

</style>