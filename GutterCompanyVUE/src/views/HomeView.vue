<template>
  <div class="header">
    <HeaderView />
  </div>

  <div class="footer">
    <footerView />
  </div>

</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
import FooterView from "@/views/FooterView.vue";

export default {

  created() {

  },


  components: {
    HeaderView,
    FooterView
  }
};

</script>

<style scoped>

</style>