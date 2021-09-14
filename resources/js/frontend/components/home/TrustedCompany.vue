<template>
    <section style="background-color: #d1d8e0">
        <!-- trusted company section start -->
        <div class="container py-4" style="margin-top: 5%">
            <div class="section">
                <div class="section-item">
                    <div class="row">
                        <div class="bg-image">
                            <div class="col-12 col-sm-12">
                                <h3
                                    style="color: #008000"
                                    class="text-center py-1"
                                >
                                    Trusted by innovative companies
                                </h3>
                                <h6
                                    style="color: #000"
                                    class="text-center py-2"
                                >
                                    Always holds in these matters to this
                                    principle of selection: he rejects pleasures
                                    to secure other greater<br />
                                    pleasures, or else he endures pains to avoid
                                </h6>

                                <!-- owl-carousel section  -->
                                <div
                                    class="
                                        owl-carousel owl-theme owl-loaded
                                        pb-3
                                    "
                                >
                                    <div class="owl-stage-outer">
                                        <div class="owl-stage">
                                            <div class="owl-item">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <a
                                                            class="thumbnail"
                                                            href="#"
                                                            ><img
                                                                alt=""
                                                                src="../../../../assets/images/inovative-companies/5.png"
                                                        /></a>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <a
                                                            class="thumbnail"
                                                            href="#"
                                                            ><img
                                                                alt=""
                                                                src="../../../../assets/images/inovative-companies/6.jpg"
                                                        /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="owl-item">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <a
                                                            class="thumbnail"
                                                            href="#"
                                                            ><img
                                                                alt=""
                                                                src="../../../../assets/images/inovative-companies/5.png"
                                                        /></a>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <a
                                                            class="thumbnail"
                                                            href="#"
                                                            ><img
                                                                alt=""
                                                                src="../../../../assets/images/inovative-companies/6.jpg"
                                                        /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="owl-item">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <a
                                                            class="thumbnail"
                                                            href="#"
                                                            ><img
                                                                alt=""
                                                                src="../../../../assets/images/inovative-companies/5.png"
                                                        /></a>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <a
                                                            class="thumbnail"
                                                            href="#"
                                                            ><img
                                                                alt=""
                                                                src="../../../../assets/images/inovative-companies/6.jpg"
                                                        /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="owl-nav">
                      <div class="owl-prev">prev</div>
                      <div class="owl-next">next</div>
                  </div> -->
                                    <!-- <div class="owl-dots">
                                    <div class="owl-dot"><span></span></div>
                                    <div class="owl-dot"><span></span></div>
                                    <div class="owl-dot"><span></span></div>
                                </div> -->
                                </div>
                                <!-- end of owl-carousel section  -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- trusted company section end -->
    </section>
</template>

<script>
import SliderFont from "../../../../assets/js/slider_font";

export default {
    mounted() {
        // OwlCarousel();
        require("../../../../assets/js/owl.carousel.min.js");
        SliderFont();
    },
};
</script>

<style scoped>
@import "../../../../assets/css/bootstrap5.min.css";
@import "../../../../assets/css/owl.carousel.min.css";
@import "../../../../assets/css/owl.theme.default.min.css";
@import "../../css/home_slider_trusted_company.css";
/* @import "../"; */
.owl-item img {
    width: 150px;
}
</style>
