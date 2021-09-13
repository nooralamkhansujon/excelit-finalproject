<template>
  <!-- main-wrapper start -->
  <main class="main-wrapper">
    <!-- about-section start -->
    <section class="about-section" style="background-color: #d1d8e0">
      <div class="container">
        <div class="row">
          <div class="section-heading col-md-12 my-3">
            <h2 class="text-center text-uppercase py-3" style="color: green">
              _About Company_
            </h2>
          </div>
        </div>
        <div class="about-wrapper">
          <div class="about-item tabcontent" id="mission">
            <div class="row align-items-center">
              <div class="col-md-5">
                <div class="about-content">
                  <h4>Deliver high-quality software on time, on scope, on budget.</h4>
                  <p>
                    As a solution providing company we offer a wide range of consulting,
                    development & quality services with 100% satisfaction.
                  </p>

                  <p style="text-align: justify">
                    We like solving difficult problems and creating high-performance
                    software that’s easy to use. We design, we build, we support, we ask
                    the right questions. We believe in efficient communication and
                    thoughtful project management throughout the whole work process. Each
                    day, we continue building long-lasting partnerships with our clients
                    all across the Nordic region without ever losing the drive to strive
                    for excellence and innovation.
                  </p>
                </div>
              </div>
              <div class="col-md-7">
                <div class="about-thumb">
                  <img
                    class="img-fluid"
                    src="../../../../assets/images/about/p1.jpg"
                    alt="about-thumb"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="about-item tabcontent" id="vision">
            <div class="row align-items-center">
              <div class="col-md-5">
                <div class="about-content">
                  <h4>Vision is to bring the power of AI to every business</h4>
                  <p>
                    As a solution providing company we offer a wide range of consulting,
                    development & quality services with 100% satisfaction.
                  </p>
                  <p>
                    We like solving difficult problems and creating high-performance
                    software that’s easy to use. We design, we build, we support, we ask
                    the right questions. We believe in efficient communication and
                    thoughtful project management throughout the whole work process. Each
                    day, we continue building long-lasting partnerships with our clients
                    all across the Nordic region without ever losing the drive to strive
                    for excellence and innovation.
                  </p>
                </div>
              </div>
              <div class="col-md-7">
                <div class="about-thumb">
                  <img
                    class="img-fluid"
                    src="../../../../assets/images/about/p3.jpg"
                    alt="about-thumb"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="about-item tabcontent" id="core">
            <div class="row align-items-center">
              <div class="col-md-5">
                <div class="about-content">
                  <h4>Deliver high-quality software on time, on scope, on budget.</h4>
                  <p>
                    As a solution providing company we offer a wide range of consulting,
                    development & quality services with 100% satisfaction.
                  </p>
                  <p style="text-align: justify">
                    We like solving difficult problems and creating high-performance
                    software that’s easy to use. We design, we build, we support, we ask
                    the right questions. We believe in efficient communication and
                    thoughtful project management throughout the whole work process. Each
                    day, we continue building long-lasting partnerships with our clients
                    all across the Nordic region without ever losing the drive to strive
                    for excellence and innovation.
                  </p>
                </div>
              </div>
              <div class="col-md-7">
                <div class="about-thumb">
                  <img
                    class="img-fluid"
                    src="../../../../assets/images/about/p2.jpg"
                    alt="about-thumb"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 50px">
            <div class="offset-lg-6 text-center col-lg-6">
              <div class="about-filter">
                <button
                  class="btn btn-danger btn-lg my-1 mx-1"
                  @click="openPage('mission', $event)"
                >
                  Our Mission
                </button>
                <button
                  class="btn btn-success btn-lg my-1 mx-1"
                  @click="openPage('vision', $event)"
                  id="defaultOpen"
                >
                  Our Vision
                </button>
                <button
                  class="btn btn-info btn-lg my-1 mx-1"
                  @click="openPage('core', $event)"
                >
                  Core Values
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- about-section end -->
  </main>
  <!-- main-wrapper start -->
</template>

<script>
import AboutJs from "../../../../assets/js/about.js";
export default {
  methods: {
    // tabs start
    openPage(pageName, event) {
      var i, tabcontent;
      //   console.log(event.target);
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      document.getElementById(pageName).style.display = "block";
    },
  },
  mounted() {
    AboutJs();
  },
};
</script>

<style scoped>
/* about section  */
.main-wrapper .about-section {
  /* padding: 50px 0; */
  padding: 100px 0;
}
.main-wrapper .about-section .section-title h2 {
  font-size: 2rem;
}
.main-wrapper .about-section .about-wrapper .about-item .about-content h4 {
  font-size: 1.7rem;
  color: #138496;
  text-transform: capitalize;
  letter-spacing: 0.2ch;
  text-align: center;
}
.main-wrapper .about-section .about-wrapper .about-item .about-thumb {
  position: relative;
  width: 100%;
  height: 400px;
}
.main-wrapper .about-section .about-wrapper .about-item .about-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main-wrapper .about-section .about-wrapper .about-filter {
  position: absolute;
  content: "";
  top: -30px;
  width: 100%;
}
.main-wrapper .about-section .about-wrapper .about-filter .tablink {
  background-color: #555;
  border-radius: 5px;
  color: #000;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  width: 25%;
}
.main-wrapper .about-section .about-wrapper .about-filter .tablink:hover {
  background-color: #777;
}
.main-wrapper .about-section .about-wrapper .tabcontent {
  color: #000;
  display: none;
  height: 100%;
}
/* end of about section  */
</style>
