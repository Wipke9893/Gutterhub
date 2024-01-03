<template>
  <div>
    <header-view />
  </div>
  <div id="login">
<!--    <div id="home">-->
<!--&lt;!&ndash;      <router-link v-bind:to="{ name: 'home' }" class="white-link">Home</router-link>&ndash;&gt;-->
<!--    </div>-->
    <div id="register" class="text-center">
      <form v-on:submit.prevent="register">
        <h1>Create Account</h1>
        <div role="alert" v-if="registrationErrors">
          {{ registrationErrorMsg }}
        </div>
        <div class="form-input-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="user.username" required autofocus />
        </div>
        <div class="form-input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="user.password" required />
        </div>
        <div class="form-input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="user.confirmPassword" required />
        </div>
        <button type="submit">Create Account</button>
        <p><router-link v-bind:to="{ name: 'login' }" class="white-link">Already have an account? Log in.</router-link>
        </p>
      </form>
    </div>
  </div>
  <div>
    <footer-view />
  </div>
</template>

<script>
import authService from '../services/AuthService';
import headerView from '@/views/HeaderView.vue'
import footerView from '@/views/FooterView.vue'

export default {
  components: {
    headerView,
    footerView
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user',
      },
      registrationErrors: false,
      registrationErrorMsg: 'There were problems registering this user.',
    };
  },
  methods: {
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password & Confirm Password do not match.';
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.$router.push({
                path: '/login',
                query: { registration: 'success' },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = 'Bad Request: Validation Errors';
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = 'There were problems registering this user.';
    },
  },
};
</script>

<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/copper.jpg");
  background-size: cover;
  height: 40rem;
  background-repeat: no-repeat;
}

</style>
