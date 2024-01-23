<template>
  <header class="header">
    <img src="../assets/img/Blakegutter.webp" alt="">
    <div class="text">

      <h3>We come out to measure house and custom fit the gutter</h3>
      <h3>no job is to big or small</h3>
      <h2>&#9733; We back our installation with a 1 year warranty &#9733;</h2>
      <h2>Free estimates</h2>
    </div>
    <div class="nav">
      <router-link v-bind:to="{ name: 'home' }" class="nav-link">Home</router-link>
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

img {
  width: 50%;
  height: 80%;
  padding-right: 5rem;
}

.header {
  background-repeat: no-repeat;
  background-color: #ffffff;
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
  color : #000000;
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

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }

  .header img {
    width: 80%;
    height: auto;
    padding-right: 0;
  }

  .text, .nav {
    align-items: center;
    margin-right: 0;
  }

  .nav {
    flex-direction: row;
    justify-content: center;
  }
}


</style>