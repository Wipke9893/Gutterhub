<template>
  <div class="header">
    <HeaderView />
  </div>
  <div class=" about">
    <div>
      <p>We are a family owned and operatored gutter solution company. Specializing in custom solutions for each client
        while striving for excellence.  We offer many solutions in gutters to enchance your curb appeal as well as solve
        your drainage issues.</p>
    </div>
  </div>
  <div class="footer">
    <FooterView />
  </div>




</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
import FooterView from '@/views/FooterView.vue'
export default {
  data() {
    return {

    }
  },
  created() {

  },
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<style scoped >

</style>