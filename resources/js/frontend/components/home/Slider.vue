<template>
    <div class="marvel-container spiderman">
        <div class="row">
            <div class="col-md-5">
                <div class="img-container">
                    <div class="img-wrapper">
                        <div class="background"></div>
                        <img
                            src="../../../../assets/images/slider/web_app.png"
                            alt=""
                        />
                    </div>
                    <div class="img-wrapper">
                        <div class="background"></div>
                        <img
                            src="../../../../assets/images/slider/mobile.png"
                            alt=""
                        />
                    </div>
                    <div class="img-wrapper">
                        <div class="background"></div>
                        <img
                            src="../../../../assets/images/slider/ui_ux.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide p-md-5 p-3">
                            <div class="name">
                                <div class="sub-title">
                                    <div class="text-wrapper">
                                        <!-- <span>Web Application Development</span> -->
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-11 offset-md-1">
                                        <div class="title">
                                            <div class="text-wrapper">
                                                <span
                                                    >Web Application
                                                    Development</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="overview">
                                <!-- <div class="title">
                    <div class="text-wrapper">
                      <span>Movie Review</span>
                    </div>
                  </div> -->
                                <div class="row">
                                    <div class="col-md-11 offset-md-1">
                                        <div class="text-wrapper">
                                            <span>
                                                <p class="description">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Ipsa quasi eligendi
                                                    labore veritatis officiis
                                                    corporis quos laboriosam sit
                                                    error doloremque! Esse
                                                    veniam excepturi enim animi,
                                                    neque sit accusamus. Et,
                                                    hic.
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="purchase">
                                <a href="#" class="purchase-btn">Read More</a>
                            </div>
                        </div>
                        <!--                  -->
                        <div class="swiper-slide p-md-5 p-3">
                            <div class="name">
                                <div class="sub-title">
                                    <div class="text-wrapper">
                                        <!-- <span>Mobile Application Development</span> -->
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-11 offset-md-1">
                                        <div class="title">
                                            <div class="text-wrapper">
                                                <span
                                                    >Mobile Application
                                                    Development</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="overview">
                                <!-- <div class="title">
                    <div class="text-wrapper">
                      <span>Movie Review</span>
                    </div>
                  </div> -->
                                <div class="row">
                                    <div class="col-md-11 offset-md-1">
                                        <div class="text-wrapper">
                                            <span>
                                                <p class="description">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Ipsa quasi eligendi
                                                    labore veritatis officiis
                                                    corporis quos laboriosam sit
                                                    error doloremque! Esse
                                                    veniam excepturi enim animi,
                                                    neque sit accusamus. Et,
                                                    hic.
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="purchase">
                                <a href="#" class="purchase-btn">Read More</a>
                            </div>
                        </div>
                        <!--                  -->
                        <div class="swiper-slide p-md-5 p-3">
                            <div class="name">
                                <div class="sub-title">
                                    <div class="text-wrapper">
                                        <!-- <span>UI/UX Design</span> -->
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-11 offset-md-1">
                                        <div class="title">
                                            <div class="text-wrapper">
                                                <span>UI/UX Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="overview">
                                <!-- <div class="title">
                    <div class="text-wrapper">
                      <span>Movie Review</span>
                    </div>
                  </div> -->
                                <div class="row">
                                    <div class="col-md-11 offset-md-1">
                                        <div class="text-wrapper">
                                            <span>
                                                <p class="description">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Ipsa quasi eligendi
                                                    labore veritatis officiis
                                                    corporis quos laboriosam sit
                                                    error doloremque! Esse
                                                    veniam excepturi enim animi,
                                                    neque sit accusamus. Et,
                                                    hic.
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="purchase">
                                <a href="#" class="purchase-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <!-- pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import "../../../../assets/css/bootstrap4.min.css";
// import "../../../../assets/css/slider.css";
// import slider from "../../../../assets/js/slider.js";

import SliderBootstrap from "../../js/home_slider_bootstrap.bundle.min.js";
import SliderJquery from "../../js/home_slider_jquery.min.js";
import SliderScript from "../../js/home_slider_script.js";
import SliderSwiper from "../../js/home_slider_swiper.min.js";

export default {
    mounted() {
        SliderJquery();
        SliderBootstrap();
        SliderSwiper();
        SliderScript();
    },
};
</script>

<style scoped>
@import "../../css/home_slider_bootstrap.css";
@import "../../css/home_slider_swiper.min.css";
@import "../../css/home_slider.css";
</style>
