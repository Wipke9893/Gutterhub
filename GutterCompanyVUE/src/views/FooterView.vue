<template>
  <div class="footer">
    <a href="mailto:coffey1311@hotmail.com">Email:Coffey1311@hotmail.com</a>
    <h2>Phone:(513)480-3377</h2>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
  },
}
</script>

<style scoped >
.footer {
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
a {
  color: #009fd3;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: flex;
  cursor: pointer;
}
h2 {
  color: #009fd3;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: flex;
}
/* Adjustments for screens up to 768px wide (tablets and large phones) */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    height: auto; /* Flexible height */
    padding: 10px 0;
  }
  a, h2 {
    font-size: 1.2rem; /* Slightly smaller font */
    padding: 5px 0;
  }
}

/* Further adjustments for very small screens (like small iPhones) */
@media (max-width: 320px) {
  a, h2 {
    font-size: 1rem; /* Even smaller font for very small screens */
    padding: 3px 0;
  }
}


</style>