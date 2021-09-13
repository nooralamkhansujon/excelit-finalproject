<template>
  <div class="container" style="padding: 20px 0 20px 0">
    <div class="row">
      <h2 style="text-align: center; color: #30cb83">Our Services</h2>
    </div>
  </div>

  <!-- service card section start -->
  <div class="container">
    <div class="wrapper wrapper-services" style="margin-bottom: 50px">
      <div class="box">
        <div class="front-face">
          <div class="icon">
            <i
              class="fa fa-code"
              style="
                font-size: 60px;
                color: white;
                margin-left: 120px;
                margin-bottom: 40px;
              "
            >
            </i>
          </div>
          <span style="font-color: white; font-size: 20px; margin-bottom: 30px"
            >Web Application Development</span
          >
        </div>

        <div class="back-face">
          <span style="font-size: 20px; margin-bottom: 30px; color: white"
            >Web Application Dvelopment</span
          >
          <p>
            Web components are core parts of full stack mobile products. Our internal team
            can help you build
          </p>
          <button class="btn text-center">
            <a href="#" style="color: white">Read More</a>
          </button>
        </div>
      </div>
      <div class="box">
        <div class="front-face">
          <div class="icon">
            <i
              class="fa fa-mobile"
              style="
                font-size: 60px;
                color: white;
                margin-left: 120px;
                margin-bottom: 40px;
              "
            ></i>
          </div>
          <span
            style="
              font-color: white;
              text-align: center;
              font-size: 20px;
              margin-bottom: 30px;
            "
            >Mobile Application Dvelopment
          </span>
        </div>
        <div class="back-face">
          <span
            style="text-align: center; font-size: 20px; margin-bottom: 30px; color: white"
            >Mobile Application Dvelopment</span
          >
          <p>
            Our mobile application development solutions include various domains and
            topics.
          </p>
          <button class="btn btn-dark text-center">
            <a href="#" style="color: white">Read More</a>
          </button>
        </div>
      </div>
      <div class="box">
        <div class="front-face">
          <div class="icon">
            <i
              class="fa fa-drafting-compass"
              style="
                font-size: 60px;
                color: white;
                margin-left: 120px;
                margin-bottom: 40px;
              "
            ></i>
          </div>
          <span
            style="
              font-color: white;
              text-align: center;
              font-size: 20px;
              margin-bottom: 30px;
            "
            >UI/UX Design</span
          >
        </div>
        <div class="back-face">
          <span
            style="text-align: center; font-size: 20px; margin-bottom: 30px; color: white"
            >UI/UX Design</span
          >
          <p>
            UI/UX design services include two critical aspects: user interface and user
            experience.
          </p>
          <button class="btn btn-dark text-center">
            <a href="#" style="color: white">Read More</a>
          </button>
        </div>
      </div>
      <div class="box">
        <div class="front-face">
          <div class="icon">
            <i
              class="fa fa-code"
              style="
                font-size: 60px;
                color: white;
                margin-left: 120px;
                margin-bottom: 40px;
              "
            >
            </i>
          </div>
          <span
            style="
              font-color: white;
              text-align: center;
              font-size: 20px;
              margin-bottom: 30px;
            "
            >Custom Software Development</span
          >
        </div>
        <div class="back-face">
          <span
            style="
              font-color: white;
              text-align: center;
              font-size: 20px;
              margin-bottom: 30px;
            "
            >Custom Software Development</span
          >
          <p>
            Any customized software solution is all about unique products and services.
          </p>
          <button class="btn btn-dark text-center">
            <a href="#" style="color: white">Read More</a>
          </button>
        </div>
      </div>
      <div class="box">
        <div class="front-face">
          <div class="icon">
            <i
              class="fa fa-bullhorn"
              style="
                font-size: 60px;
                color: white;
                margin-left: 120px;
                margin-bottom: 40px;
              "
            ></i>
          </div>
          <span
            style="
              font-color: white;
              text-align: center;
              font-size: 20px;
              margin-bottom: 30px;
            "
            >Digital Marketing</span
          >
        </div>
        <div class="back-face">
          <span
            style="text-align: center; font-size: 20px; margin-bottom: 30px; color: white"
            >Mobile Application Dvelopment</span
          >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button class="btn btn-dark text-center">
            <a href="#" style="color: white">Read More</a>
          </button>
        </div>
      </div>
      <div class="box">
        <div class="front-face">
          <div class="icon">
            <i
              class="fa fa-cogs"
              style="
                font-size: 60px;
                color: white;
                margin-left: 120px;
                margin-bottom: 40px;
              "
            ></i>
          </div>
          <span
            style="
              font-color: white;
              text-align: center;
              font-size: 20px;
              margin-bottom: 30px;
            "
            >Blockchain Development</span
          >
        </div>
        <div class="back-face">
          <span
            style="text-align: center; font-size: 20px; margin-bottom: 30px; color: white"
            >Blockchain Development</span
          >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button class="btn btn-dark text-center">
            <a href="#" style="color: white">Read More</a>
          </button>
        </div>
      </div>
    </div>
    <!-- wrapper end -->
  </div>
  <!-- service card section end -->
</template>

<script>
export default {};
</script>

<style scoped>
/* For Services Slider */
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::before,
.slider::after {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider .slide {
  height: 100px;
  width: 250px;
}

/* end services slider */

/* //services section css  */
.back-face button {
  background: linear-gradient(to right, #037ff7, #149dc0);
  border: 1px solid #037ff7;
}
.back-face p {
  color: #fff;
  text-align: left;
}
.front-face span {
  text-align: center;
  margin-top: 30px;
  padding: 0 10px;
}

.wrapper-services {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 700px) {
  .wrapper-services {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 500px) {
  .wrapper-services {
    grid-template-columns: 1fr;
  }
}
</style>
