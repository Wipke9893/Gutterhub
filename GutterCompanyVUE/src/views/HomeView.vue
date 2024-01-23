<template>
  <div class="header">
    <HeaderView />

  </div>

  <div class="main">
    <MainView />
  </div>


  <div class="footer">
    <footerView />
  </div>

</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
import MainView from "@/views/MainView.vue";
import FooterView from "@/views/FooterView.vue";

export default {

  created() {

  },


  components: {
    HeaderView,
    MainView,
    FooterView
  }
};

</script>

<style scoped>
@media (max-width: 600px) {
  .header, .main, .footer {
    /* Adjust layout and styling for smaller screens */
    /* Example: stack elements vertically, adjust padding and font sizes, etc. */
  }
}

</style>