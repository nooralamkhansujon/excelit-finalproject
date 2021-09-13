<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="vertical-menu">
    <div data-simplebar="" class="h-100">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="menu-title">Menu</li>

          <li>
            <a href="javascript: void(0);" class="waves-effect">
              <i class="bx bx-home-circle"></i
              ><span class="badge badge-pill badge-info float-right">03</span>
              <span>Dashboards</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li><a href="index.html">Default</a></li>
              <li><a href="dashboard-saas.html">Saas</a></li>
              <li><a href="dashboard-crypto.html">Crypto</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect">
              <i class="bx bx-layout"></i>
              <span>Manage Team</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li>
                <router-link :to="{ name: 'ViewSoftwareTeam' }">View Team </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect">
              <i class="bx bx-layout"></i>
              <span>Manage Slider</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li><router-link :to="{ name: 'ViewSlider' }">View Slider</router-link></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect">
              <i class="bx bx-layout"></i>
              <span>Manage Footer</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li><a href="layouts-horizontal.html">Add Footer</a></li>
            </ul>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect">
              <i class="bx bx-layout"></i>
              <span>Manage Role</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li><a href="layouts-horizontal.html">Add Role</a></li>
              <li><a href="layouts-horizontal.html">View Role</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
  <!-- Left Sidebar End -->
</template>

<script>
export default {};
</script>
