<template>
  <Section>
    <div class="header">
      <HeaderView />
    </div>

    <div class="background">
    <div class="scheduler">
      <Scheduler/>
    </div>
    </div>

    <div class="footer">
      <FooterView />
    </div>
  </Section>
</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
import FooterView from '@/views/FooterView.vue';
import Scheduler from "@/components/Scheduler.vue";
export default {

  data() {
    return {
    }
  },
  created() {
  },
  components: {
    HeaderView,
    Scheduler,
    FooterView,
  }
}
</script>

<style scoped >

.background {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/DJI_0322-2048x1536.jpg");
  background-size: cover;
  height: 38rem;
  background-repeat: no-repeat;
  background-position: bottom;
}

</style>