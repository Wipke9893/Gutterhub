<template>


  <div class="footer">
    <a href="mailto:info@blakegutter.com">Email: info@blakegutter.com</a>
    <h2>Phone: (123) 456-7890</h2>
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
  background-color: #494949;
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

</style>