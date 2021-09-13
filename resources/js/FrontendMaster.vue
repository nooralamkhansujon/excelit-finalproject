<template>
  <!-- for all frontend view  -->
  <div v-if="frontendHome">
    <Header />
    <router-view></router-view>
    <!-- scroll to top button start  -->
    <Footer />
    <button onclick="topFunction()" id="backtotop" title="Go to top">
      <i class="fas fa-long-arrow-alt-up"></i>
    </button>
    <!-- scroll to top button end  -->
    <!-- testimonial end  -->
  </div>
</template>
<script>
import Header from "./frontend/components/Header.vue";
import Footer from "./frontend/components/Footer.vue";
// require("jquery");
// import "../assets/css/style.css";
// import "../assets/css/owl.carousel.min.css";
// import "../assets/css/owl.theme.default.min.css";
// import "../assets/css/swiper-bundle.min.css";

// import "../assets/css/backtotop.css";
// import "../assets/css/service_card.css";

// import "../assets/css/carousel.css";
// import "../assets/css/our_servics.css";
// import "../assets/css/animate.min.css";

// import "../assets/css/bootstrap5.min.css";

// import "../assets/js/isotope.pkgd.min.js";
// import "../assets/js/swiper-bundle.min.js";
// import "../assets/js/owl.carousel.min.js";
// import "../assets/js/autofilter.js";

// import "../assets/js/three.min.js";
// import "../assets/js/vanta.dots.min.js";
// import Autofilter from "../assets/js/autofilter.js";
// import CustomJs from "../assets/js/custom.js";
export default {
  components: { Header, Footer },
  computed: {
    frontendHome() {
      //let currentRoute = this.$router.currentRoute.value.path;
      if (this.$router.currentRoute.value.meta?.frontend) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    // Autofilter();
    // CustomJs();
  },
};
</script>
