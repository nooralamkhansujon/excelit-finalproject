<template>
  <!-- footer part start -->
  <footer class="main-footer">
    <div class="footer-top">
      <div class="container" style="color: white">
        <div class="widget-section">
          <div class="row clearfix">
            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div id="naxly_contact_us-1" class="footer-widget widget_naxly_contact_us">
                <!--Footer Column-->
                <div class="contact-widget">
                  <div class="widget-title">
                    <h3>Office Location</h3>
                    <div
                      class="decor"
                      style="
                        background-image: url(https://excelitai.com/wp-content/themes/naxly/assets/images/icons/decor-3.png);
                      "
                    ></div>
                  </div>
                  <div class="widget-content">
                    <p>
                      17, Alhaz Samsuddin Mansion (9th Floor), Moghbazar, New Easkaton,
                      Ramna, Dhaka-1217
                    </p>
                    <div>
                      <h5 class="text-white">Quick Contact</h5>
                      <ul class="clearfix">
                        <li>
                          <span><i class="fa fa-phone"></i></span>
                          <a href="tel:http://+88%2001611%20815656"> +88 01611 815656</a>
                        </li>
                        <li>
                          <span><i class="fa fa-envelope"> </i></span>
                          <a href="mailto:http://info@excelitai.com">
                            info@excelitai.com</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div
                id="naxly_footer_services-4"
                class="footer-widget widget_naxly_footer_services"
              >
                <!--Start Single sidebar-->
                <div class="links-widget">
                  <div class="widget-title">
                    <h3>Useful Links</h3>
                    <div
                      class="decor"
                      style="
                        background-image: url(https://excelitai.com/wp-content/themes/naxly/assets/images/icons/decor-3.png);
                      "
                    ></div>
                  </div>
                  <div class="widget-content">
                    <ul class="clearfix">
                      <!-- Title -->
                      <li>
                        <a href="http://excelitai.com/advertising-marketing-2/"
                          >Advertising &amp; Marketing</a
                        >
                      </li>
                      <li>
                        <a href="http://excelitai.com/healthcare-medicine-2/"
                          >Healthcare &amp; Medicine</a
                        >
                      </li>
                      <li>
                        <a href="http://excelitai.com/financials-banking-4/"
                          >Financials &amp; Banking</a
                        >
                      </li>
                      <li>
                        <a href="http://excelitai.com/travel-hospitality-3/"
                          >Travel &amp; Hospitality</a
                        >
                      </li>
                      <li>
                        <a href="http://excelitai.com/media-entertainment/"
                          >Media &amp; Entertainment</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div
                id="naxly_about_company_two-4"
                class="footer-widget widget_naxly_about_company_two"
              >
                <!--Footer Column-->
                <div class="about-widget">
                  <div class="widget-title">
                    <h3>About Company</h3>
                    <div
                      class="decor"
                      style="
                        background-image: url(https://excelitai.com/wp-content/themes/naxly/assets/images/icons/decor-3.png);
                      "
                    ></div>
                  </div>
                  <div class="widget-content">
                    <div class="text">
                      <p>
                        Our goal is to help our companies maintain achieve best class
                        positions their respective industries &amp; our team works occur
                        that pleasures have to be repudiated.
                      </p>
                    </div>
                    <figure class="footer-logo">
                      <a href="https://excelitai.com/"
                        ><img
                          src="https://excelitai.com/wp-content/uploads/2021/03/footer.png"
                          alt="Awesome Image"
                      /></a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer part end -->

  <!-- copy right section  -->

  <section class="copy-right">
    <div class="container py-3">
      <p class="text-center">Copyright 2021 Excel IT AI, All Rights Reserved.</p>
    </div>
  </section>
  <!-- end of copy right section  -->
</template>

<script>
export default {};
</script>

<style scoped>
/* footer section start */
.main-footer {
  /* background-color: rgb(23, 10, 71); */
  background: url(../../../assets/images/footer-image.jpg);
  /* background: linear-gradient(
    to bottom,
    rgba(184, 74, 1, 0.9),
    rgba(10, 63, 90, 0.9)
  ); */
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  clip-path: polygon(19% 19%, 67% 8%, 100% 0, 100% 99%, 0 100%, 0 0);
  /* clip-path: circle(72% at 49% 79%); */
  position: relative;
}

.main-footer::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9));
}
@media screen and (max-width: 800px) {
  .main-footer {
    clip-path: none;
    background-size: fill;
  }
  .main-footer::before {
    background: transparent;
  }
}
.widget-section {
  padding-top: 30px;
}
.widget-content {
  padding-top: 50px;
  color: #6eb2d3;
}
.widget-content p {
  letter-spacing: 0.1ch;
  word-spacing: 0.2ch;
  text-transform: capitalize;
  cursor: pointer;
}
.widget-content p:hover {
  color: #fc5c0f;
}
.widget-content li a {
  color: #6eb2d3;
  text-decoration: none;
}
.widget-content li a:hover {
  color: #fc5c0f;
}
.widget-content li span {
  color: #fff;
  font-size: 1.2rem;
  margin: 0 10px;
}
.links-widget li,
a {
  text-decoration: none !important;
  color: white;
  padding-top: 10px;
}
/* .links-widget li a:hover {
  text-decoration: none;
} */
/* footer section end */

/* copy right section  */
.copy-right {
  background: #051f2a;
  color: #fff;
  margin-top: -5px !important;
}
</style>
