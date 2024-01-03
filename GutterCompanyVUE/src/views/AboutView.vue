<template>
  <div class="header">
    <HeaderView />
  </div>
  <div class=" about">
    <section>
      <div class="infobox">
        <H1>About Gutter's R US</H1>
        <p>We are a family owned and operatored gutter solution company. Specializing in custom solutions for each client
          while striving for excellence.  We offer many solutions in gutters to enchance your curb appeal as well as solve
          your drainage issues.  Servicing the greater Cincinnati, OH market area with out standing workmanship and 
          satisfied customers.  We offer complete installs as well as repairs.  New construction and existing homes.
          Hire the professional team that you can count on to do it right the first time.
        </p>
      </div>
      <div id="infoarea">
        <div class="infobox" id="service">
          <H1>Services we offer</H1>
          <ul class="nobullets">
            <li class="nobullets">New construction complete installtion</li>
            <li class="nobullets">Existing homes complete installtion</li>
            <li class="nobullets">Existing homes repair</li>
            <li class="nobullets">Repair facsia board</li>
            <li class="nobullets">Gutter cleaning</li>
            <li class="nobullets">Gutter leaf protection</li>
          </ul>
        </div>
        <div class="infobox" id="contact">
          <H1>Contact Info</H1>
          <ul class="nobullets">
            <li class="nobullets">Address: 123 Main Street</li>
            <li class="nobullets">City/State/Zip: Cincinnati, OH 45203</li>
            <li class="nobullets">Email: somebody@guttersrus.com</li>
            <li class="nobullets">Phone: 513-555-5555</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <div class="footer">
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
import FooterView from '@/views/FooterView.vue'
export default {
  data() {
    return {

    }
  },
  created() {

  },
  components: {
    HeaderView,
    FooterView
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

.infobox {
  border-radius: 5px;
  background-color: rgb(79, 79, 79);
  padding: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: rgb(0, 160, 213);
  margin: .2rem .2rem .2rem .2rem;
}

#infoarea {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#service {
  width: 50%;

}

#contact {
  width: 50%;
}

.nobullets {
  list-style: none;
  list-style-type: none;
  text-decoration: none;
}


</style>