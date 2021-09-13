<template>
  <!-- for admin login  -->
  <div id="layout-wrapper" v-if="currentRouteAdmin">
    <AdminHeader />
    <AdminSidebar />
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
        <!-- container-fluid -->
      </div>
      <!-- End Page-content -->
      <AdminFooter />
    </div>
    <!-- end main content-->
  </div>

  <!-- for all admin view  -->
  <div v-if="currentRouteAdminLogin">
    <router-view></router-view>
  </div>
</template>

<script>
import AdminHeader from "./admin/components/Header.vue";
import AdminFooter from "./admin/components/Footer.vue";
import AdminSidebar from "./admin/components/Sidebar.vue";
import App from "../admin_js/js/app.js";

export default {
  components: {
    AdminHeader,
    AdminFooter,
    AdminSidebar,
  },
  computed: {
    //check if current route is admin login then return true else return false
    currentRouteAdmin() {
      let currentRoute = this.$router.currentRoute.value.path; //sign
      // let currentRoute = this.$router.path; //sign
      console.log(this.$router.currentRoute.value?.meta.admin);
      if (
        currentRoute !== "/admin/login" &&
        this.$router.currentRoute.value?.meta.admin
      ) {
        return true;
      }
    },

    //for showing admin login page
    currentRouteAdminLogin() {
      let currentRoute = this.$router.currentRoute.value.path; //sign
      if (currentRoute == "/admin/login" && this.$router.currentRoute.value?.meta.admin) {
        return true;
      }
    },
  },
  mounted() {
    App();
  },
};
</script>
