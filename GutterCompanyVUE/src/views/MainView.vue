<template>
  <div class="rain">
    <slider :images="images" />
    <Reviews />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Reviews from "@/components/Reviews.vue"; // Import the Reviews component

export default {
  components: {
    Slider,
    Reviews, // Include the Reviews component
  },
};
</script>

<style scoped>
.rain {
  background-image: url("../assets/img/c1f748ef1194c95778e4ce6591004f6c.gif");
  height: 40rem;
  background-size: cover;
  background-position: center;
}
</style>