<template>
    <!-- contact top part start -->
    <section class="mt-5">
        <div class="container mt-4">
            <div class="row">
                <div class="col-sm-6 offset-sm-3 mt-4 mb-4">
                    <h4 class="text-center" style="color: green">
                        CONTACT INFORMATION
                    </h4>
                    <h5 class="text-center">
                        We’d love to hear from you anytime
                    </h5>
                </div>
                <div class="col-sm-6 offset-sm-3 mt-4 mb-4">
                    <p style="text-align: center">
                        Always holds in these matters to this principle of
                        selection he rejects pleasures to secure other greater
                        pleasures, or else he endures pains to avoid
                    </p>
                </div>
            </div>
            <!-- contact cart start -->
            <div class="container-fluid mb-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="boxx">
                            <div class="our-services settings">
                                <div class="icon">
                                    <i class="fas fa-search-location"></i>
                                </div>
                                <h4>Location</h4>
                                <p>
                                    17, Alhaz Samsuddin Mansion (9th Floor),
                                    Moghbazar, New Easkaton, Ramna, Dhaka-1217
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="boxx">
                            <div class="our-services settings">
                                <div class="icon">
                                    <i class="fas fa-phone-square-alt"></i>
                                </div>
                                <h4>Make a Call</h4>
                                <p>
                                    +880-01611815656 <br />
                                    01780872914
                                </p>
                                <p style="padding-bottom: 5px">
                                    Sat - Thu: 09.00 AM to 6.00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="boxx">
                            <div class="our-services settings">
                                <div class="icon">
                                    <i class="fas fa-envelope-open-text"></i>
                                </div>
                                <h4>Send a Mail</h4>
                                <p>
                                    info@excelitai.com <br />
                                    info@excelitai.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- contact card end -->
        </div>
    </section>
    <!-- contact top part end -->

    <!-- contact part start  -->
    <section class="contact my-4" style="margin-bottom: 100px !important">
        <div class="container mt-4 py-5" style="text-align: center">
            <h3 style="text-align: center">Contact Us</h3>
            <img
                src="../../../assets/images/contact.png"
                class="img-fluid"
                alt=""
            />
        </div>
        <!-- Wrapper container -->
        <div class="container py-4">
            <!-- Bootstrap 5 starter form -->
            <form
                id="contactForm"
                style="display: flex; justify-content: center"
            >
                <div class="contact-container text-center">
                    <div class="row">
                        <div class="col-xl-6">
                            <!-- Name input -->
                            <div class="mb-3">
                                <label class="form-label" for="name"
                                    >Name</label
                                >
                                <input
                                    class="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    data-sb-validations="required"
                                />
                                <div
                                    class="invalid-feedback"
                                    data-sb-feedback="name:required"
                                >
                                    Name is required.
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <!-- Subject input -->
                            <div class="mb-3">
                                <label class="form-label" for="subject"
                                    >Subject</label
                                >
                                <input
                                    class="form-control"
                                    id="subject"
                                    type="text"
                                    placeholder="Subject"
                                    data-sb-validations="required, email"
                                />
                                <div
                                    class="invalid-feedback"
                                    data-sb-feedback="subject:required"
                                >
                                    subject is required.
                                </div>
                                <div
                                    class="invalid-feedback"
                                    data-sb-feedback="subject:email"
                                >
                                    subject is not valid.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Email address input -->
                        <div class="mb-3 col-md-12">
                            <label class="form-label" for="emailAddress"
                                >Email</label
                            >
                            <input
                                class="form-control"
                                id="emailAddress"
                                type="email"
                                placeholder="Email Address"
                                data-sb-validations="required, email"
                            />
                            <div
                                class="invalid-feedback"
                                data-sb-feedback="emailAddress:required"
                            >
                                Email Address is required.
                            </div>
                            <div
                                class="invalid-feedback"
                                data-sb-feedback="emailAddress:email"
                            >
                                Email Address Email is not valid.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Message input -->
                        <div class="mb-3 col-md-12">
                            <label class="form-label" for="message"
                                >Message</label
                            >
                            <textarea
                                class="form-control"
                                id="message"
                                type="text"
                                placeholder="Message"
                                style="height: 10rem"
                                data-sb-validations="required"
                            ></textarea>
                            <div
                                class="invalid-feedback"
                                data-sb-feedback="message:required"
                            >
                                Message is required.
                            </div>
                        </div>
                    </div>

                    <!-- Form submissions success message -->
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center mb-3">
                            Form submission successful!
                        </div>
                    </div>

                    <!-- Form submissions error message -->
                    <div class="d-none" id="submitErrorMessage">
                        <div class="text-center text-danger mb-3">
                            Error sending message!
                        </div>
                    </div>
                    <!-- Form submit button -->
                    <a class="btn btn-success btn-lg">Submit</a>
                </div>
            </form>
        </div>
        <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.432655682407!2d90.39212834436911!3d23.76134845824867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b926c620f459%3A0xf0b4514991e507c8!2sExcel%20IT%20AI!5e0!3m2!1sen!2sbd!4v1630475258403!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
    </section>
    <!-- contact part end  -->
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../../assets/css/contact.css";
h4,
h3,
h5 {
    color: rgb(20, 167, 130);
}
</style>
