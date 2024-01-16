<template>
  <div>
    <transition-group name="fade" tag="div">
      <div class="faded" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
  </div>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slider",
  data() {
    return {
      images: [
        "https://aussiegutterprotection.com.au/wp-content/uploads/2019/11/AGP-Photo-Batch-3-50-of-104.jpg",
        "https://www.superiorseamless.com/wp-content/uploads/2018/09/20150610_103158-2.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/91spkDHEleL.jpg",
        "https://th.bing.com/th/id/OIP.n2pLlNj1_pbrKFsWjDTprQHaFj?rs=1&pid=ImgDetMain",
        "https://i5.walmartimages.com/asr/79ddcfbc-47e1-4980-9c81-9ccc0b47319c.0feba2753e91445fb0fc5003e1be594d.jpeg",
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>


<style scoped>
img {
  width: 30rem;
  height: 30rem;
}
.faded {
  position: absolute;
  top: 25rem;
  left: 95rem;
}
</style>