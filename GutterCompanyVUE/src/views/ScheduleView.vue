<template>
  <Section>
    <div class="header">
      <HeaderView />
    </div>
    <div>
      <Scheduler/>
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

section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
}






</style>