<template>
    <div class="reviews">
      <h2>Top Reviews</h2>
      <div v-for="(review, index) in reviews" :key="index" class="review-item">
        <h3>{{ review.title }}</h3>
        <p>{{ review.content }}</p>
        <div class="rating">
          <span class="rating-text"><strong>Rating: {{ review.rating }}/5</strong></span>
          <div class="rating-stars">
            <span v-for="(star, index) in 5" :key="index" :class="getStarClass(review.rating, index)">&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviews: [
          {
            title: 'Great product!',
            content: 'I loved using this product. It exceeded my expectations.',
            rating: 3,
          },
          {
            title: 'Excellent service',
            content: 'The service provided was outstanding. Highly recommended.',
            rating: 4.5,
          },
          // Add more reviews as needed
        ],
      };
    },
    methods: {
      getStarClass(rating, index) {
        if (index <= Math.floor(rating) - 1) {
          return 'filled'; // Full star
        } else if (index === Math.floor(rating) && rating % 1 !== 0) {
          return 'half-filled'; // Half star
        } else {
          return ''; // Empty star
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles for the reviews container */
  .reviews {
    margin-top: 20px;
  }
  
  /* Styles for each individual review item */
  .review-item {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
  }
  
  /* Styles for the title */
  .review-item h3 {
    margin-top: 0;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  /* Styles for the content */
  .review-item p {
    color: #555;
    font-size: 1rem;
    line-height: 1.4;
  }
  
  /* Styles for the rating display */
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
  
  /* Styles for the filled stars */
  .filled {
    color: #FFD700;
  }
  
  /* Styles for the half-filled stars */
  .half-filled {
    position: relative;
    color: #FFD700;
    overflow: hidden;
    width: 0.5em; /* Adjust the width as needed */
  }
  
  .half-filled::before {
    content: '\2605';
    position: absolute;
    left: 0;
  }
  </style>
  