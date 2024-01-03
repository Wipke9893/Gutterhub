<template>
  <div>
    <transition-group name="fade" tag="div">
      <div class="faded" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
<!--    <a class="prev" @click="prev" href="#">&#10094; Previous</a>-->
<!--    <a class="next" @click="next" href="#">&#10095; Next</a>-->
  </div>
</template>


<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://aussiegutterprotection.com.au/wp-content/uploads/2019/11/AGP-Photo-Batch-3-50-of-104.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/91spkDHEleL.jpg",
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