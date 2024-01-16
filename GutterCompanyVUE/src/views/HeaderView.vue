<template>
  <header class="header">
    <div class="text">
      <h1>Gutter Installation</h1>
      <h3>We come out to measure house and custom fit the gutter</h3>
      <h3>no job is to big or small</h3>
      <h2>We back our installation with a 1 year warranty</h2>
      <h3>Free estimates</h3>
    </div>
    <div class="nav">

      <router-link v-bind:to="{ name: 'home' }" class="nav-link">Home</router-link>
      <router-link v-bind:to="{ name: 'schedule' }" class="nav-link">Schedule</router-link>
      <router-link v-bind:to="{ name: 'about' }" class="nav-link">About</router-link>
    </div>

  </header>
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
.header {
  background-image: url("../assets/img/image1.jpeg");
  background-repeat: no-repeat;
  background-color: #484848;
  height: 18rem;
  display: flex; /* Use flex to arrange children */
  align-items: center; /* Center children vertically */
  justify-content: flex-end; /* Align children to the right */
}

.nav {
  display: flex;
  flex-direction: column; /* Arrange children in a column */
  align-items: center; /* Center children vertically */
  padding: 1rem;
}

.text {
  color : #37adf4;
  display: flex;
  flex-direction: column; /* Arrange children in a column */
  align-items: center; /* Center text */
  margin-right: 13rem; /* Add some space to the right of the text */
}
h2 {
  color : #bb7901;
}

.nav-link {
  color: #37adf4;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  box-shadow: 7px 7px 7px 0 rgba(2, 2, 2, 0.5);
  margin: 0.5rem 0;
  border-radius: 15px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; /* Smooth transition for background and text color */
}

.nav-link:hover {
  background-color: #37adf4;
  color: #ffffff;
  transform: scale(1.05); /* Enlarge the nav link slightly */
  cursor: pointer;
}
</style>