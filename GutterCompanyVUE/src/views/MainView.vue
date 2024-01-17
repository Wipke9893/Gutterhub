<template>
<div class="rain">
  <slider :images="images" />
  <div class="reviews">
  <reviews />
  </div>
  <div class="contact-cta">
    <p>Contact us today for a free estimate and schedule a meeting!</p>
    <button @click="sendEmail">Schedule Your Free Estimate</button>
  </div>
</div>


</template>

<script>
import Slider from "@/components/Slider.vue";
import Reviews from '@/components/Reviews.vue'
export default {
  components: {
    Slider,
    Reviews
  },
  methods: {
    sendEmail() {
      window.location.href = 'mailto:coffey1311@hotmail.com';
    }
  }
};
</script>

<style scoped>
.contact-cta {
  text-align: center;
}

p {
  font-size: 1.5rem;
  font-weight: 600;
  color: #03b6d4;
}

.contact-cta button {
  background-color: #4CAF50; /* Green background */
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

.contact-cta button:hover, .contact-cta button:focus {
  background-color: #45a049; /* Slightly darker green on hover/focus */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Larger shadow on hover/focus */
  transform: translateY(-2px); /* Slight lift on hover/focus */
}

.contact-cta button:active {
  background-color: #3e8e41; /* Even darker green when clicked */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Smaller shadow when clicked */
  transform: translateY(1px); /* Button is "pressed down" when clicked */
}

.rain {
  background-image: url("../assets/img/drone-shots-040.jpg");
  height: 40rem;
  background-size: cover;
  background-position: bottom;
}

.reviews {
  background-color: rgba(73, 73, 73, 0); /* Adjust transparency */
  width: 18rem;
  padding: 1rem; /* Padding around the content */
}
</style>
