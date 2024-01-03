<template>
<div class="rain">
  <slider :images="images" />
</div>


</template>

<script>
import Slider from "@/components/Slider.vue";
export default {
  components: {
    Slider,
  }
};
</script>

<style scoped >

.rain {
  background-image: url("../assets/img/c1f748ef1194c95778e4ce6591004f6c.gif");
  height: 40rem;
  background-size: cover;
  background-position: top;

}

</style>