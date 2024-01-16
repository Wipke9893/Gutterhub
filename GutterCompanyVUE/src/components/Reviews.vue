<template>
  <div class="reviews">
    <div v-if="reviews.length > 0" class="review-item">
      <h3>{{ reviews[currentReviewIndex].title }}</h3>
      <p>{{ reviews[currentReviewIndex].content }}</p>
      <div class="rating">
        <span class="rating-text"><strong>Rating: {{ reviews[currentReviewIndex].rating }}/5</strong></span>
        <div class="rating-stars">
          <span v-for="(star, index) in 5" :key="index" :class="getStarClass(reviews[currentReviewIndex].rating, index)">&#9733;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentReviewIndex: 0,
      reviews: [
        {
          title: 'Great product!',
          content: 'I recently tried this gutter system, and it genuinely exceeded my expectations. The quality of the material is top-notch, ensuring durability and efficiency. It effectively keeps debris out, which significantly reduces maintenance efforts. The installation process was seamless, and the overall performance has been impressive. This product is a game-changer for any homeowner looking to upgrade their gutter system',
          rating: 4,
        },
        {
          title: 'Exceptional Service and Quality',
          content: ' Professional and knowledgeable team, from first call to installation completion. They were courteous, answered all queries, and ensured satisfaction. The gutters\' quality is superb, enhancing my home\'s look and function. Truly outstanding service and quality, a rare combination!',
          rating: 4.5,
        },

        {
          "title": "Top-Notch Gutter Installation",
          "content": "Impressive service from start to finish. The team displayed utmost professionalism and expertise in gutter installation. They were attentive, addressing every concern with clarity. The final result is remarkable, elevating my home's appearance and efficiency. Exceptionally high-quality work!",
          "rating": 5
        },

        {
          "title": "Superior Quality and Service",
          "content": "Highly commendable gutter service! The team's proficiency and attention to detail stood out from initial contact to project completion. They were responsive and thorough, ensuring top-quality installation. My home's curb appeal has significantly improved. A blend of excellent service and superior product quality!",
          "rating": 5
        },


        // Add more reviews as needed
      ],
    };
  },
  methods: {
    getStarClass(rating, index) {
      if (index < Math.floor(rating)) {
        return 'filled'; // Full star
      } else if (index === Math.floor(rating) && rating % 1 !== 0) {
        return 'half-filled'; // Half star
      } else {
        return ''; // Empty star
      }
    },
    updateReviewIndex() {
      this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
    },
  },
  mounted() {
    setInterval(this.updateReviewIndex, 4000); // Change review every 4 seconds
  },
};
</script>


<style scoped>

.review-item {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 40px;
  height: 22rem;
}

.review-item h3 {
  margin-top: 0;
  font-size: 1.2rem;
  margin-bottom: 10px;

}

.review-item p {
  color: #555;
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 20px;
}

.rating {
  margin-top: 15px;
}

.rating-text {
  font-weight: bold;
}

.rating-stars {
  color: #FFD700;
  font-size: 20px;
}

</style>
```
