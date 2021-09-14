<template>
    <!-- header start -->
    <header class="header-section">
        <div class="main-menu">
            <div class="container-fluid p-0">
                <nav class="navbar navbar-expand-lg my-navbar">
                    <a class="navbar-brand" href="#">
                        <img src="assets/images/logo/PPP.jpg" alt="" />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span>
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav m-auto">
                            <li class="nav-item active">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'Home' }"
                                    >Home</router-link
                                >
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    data-toggle="dropdown"
                                    >Company</a
                                >
                                <ul
                                    class="dropdown-menu mega-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <router-link
                                            class="dropdown-item"
                                            :to="{ name: 'About' }"
                                            >About Company</router-link
                                        >
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Why Choose Us</a
                                        >
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item">
                                            Methodology</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="
                                                dropdown-item
                                                d-flex
                                                justify-content-between
                                            "
                                            href="#"
                                            >Team
                                            <span
                                                ><i
                                                    class="
                                                        fas
                                                        fa-angle-right
                                                        ml-3
                                                    "
                                                ></i></span
                                        ></a>
                                        <ul class="submenu">
                                            <li>
                                                <a class="submenu-item" href="#"
                                                    >Management</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="submenu-item"
                                                    href="page/software_team.html"
                                                    >Software Team</a
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    data-toggle="dropdown"
                                    >Course</a
                                >
                                <ul
                                    class="dropdown-menu mega-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Laravel</a
                                        >
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Flutter</a
                                        >
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >UI/UX Design</a
                                        >
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Digital Marketing</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    data-toggle="dropdown"
                                >
                                    Services
                                </a>
                                <ul
                                    class="dropdown-menu mega-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="page/services/web_application_development.html"
                                            >Web Application Development</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="page/services/mobile_application_development.html"
                                            >Mobile Application Development</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="page/services/ui_ux_design.html"
                                            >UI/UX Design</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="page/services/custom_software_development.html"
                                            >Coustom Software Development</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="page/services/degital_marketing.html"
                                            >Digital Marketing</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Industries
                                </a>
                                <ul
                                    class="dropdown-menu mega-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <router-link
                                            class="dropdown-item"
                                            :to="{ name: 'Fintech' }"
                                            >Fintech</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item"
                                            :to="{ name: 'Health' }"
                                            >Healthcare</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item"
                                            :to="{ name: 'Ecommerce' }"
                                            >E-Commerce</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item"
                                            :to="{ name: 'Internet' }"
                                            >Internet Of Things</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item"
                                            :to="{ name: 'Transportation' }"
                                            >Trasportation &
                                            Logistics</router-link
                                        >
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <router-link
                                    :to="{ name: 'Career' }"
                                    class="nav-link"
                                    >career</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">contact us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <!-- header end -->
</template>

<script>
export default {};
</script>

<style scoped>
/* @import "../../../assets/css/bootstrap5.min.css"; */
@import "../../../assets/css/menubar.css";
</style>
