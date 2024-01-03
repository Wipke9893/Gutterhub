<template>
<div class="rain">
  <slider :images="images" />
  <div class="reviews">
  <reviews />
  </div>
</div>


</template>

<script>
import Slider from "@/components/Slider.vue";
import Reviews from '@/components/Reviews.vue'
export default {
  components: {
    Slider,
    Reviews
  }
};
</script>

<style scoped >

.rain {
  background-image: url("../assets/img/c1f748ef1194c95778e4ce6591004f6c.gif");
  height: 38rem;
  background-size: cover;
  background-position: center;
}
.reviews {
  background-color: rgba(73, 73, 73, 0); /* Adjust the last number to control transparency */
  width: 18rem;
  padding: 1rem; /* Add some padding around the content */

}


</style>