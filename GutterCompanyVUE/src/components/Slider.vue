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
        "https://studioaluminum.ca/wp-content/uploads/2019/05/24ED6311-BFE0-4463-A36A-9CA6EACDA90F-12055-000002659346E359.jpg",
        "https://trushinewindowcleaning.com/wp-content/uploads/2020/08/gutter-screen.jpg",
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&amp;imageId=10363943-894__1&amp;recipeName=350",
        "https://th.bing.com/th/id/OIP.AMaxo0KGaTyckmr0uFW6_QAAAA?rs=1&pid=ImgDetMain",
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

/* Adjustments for medium devices like tablets and large phones */
@media (max-width: 768px) {
  img {
    width: 100%; /* Full width on smaller screens */
    height: auto; /* Adjust height to maintain aspect ratio */
  }
  .faded {
    position: relative; /* Adjust positioning for smaller screens */
    top: unset;
    left: unset;
  }
}

/* Hide the slider completely on very small screens (below 598px) */
@media (max-width: 598px) {
  .faded, img {
    display: none;
  }
}



</style>