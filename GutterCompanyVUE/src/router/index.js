import { createRouter as createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'

// Import components
import HomeView from '../views/HomeView.vue';
import ScheduleView from '../views/ScheduleView.vue';
import AboutView from '../views/AboutView.vue';


// Define routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/schedule",
    name: "schedule",
    component: ScheduleView,
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      requiresAuth: false
    },
  }
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to) => {

  // Get the Vuex store
  const store = useStore();

  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    return { name: "login" };
  }
  // Otherwise, do nothing and they'll go to their next destination
});

export default router;
