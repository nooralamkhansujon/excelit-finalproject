import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Career from "../pages/Career.vue";
import About from "../pages/About.vue";
import Ecommerce from "../pages/Ecommerce.vue";
import Fintech from "../pages/Fintech";
import Health from "../pages/Health.vue";
import Internet from "../pages/Internet.vue";
import Transportation from "../pages/Transportation.vue";
import Contact from "../pages/Contact.vue";
import WebApplication from "../pages/WebApplication.vue";
import MobileApplication from "../pages/MobileApplication.vue";
import UiUxDesign from "../pages/UiUxDesign.vue";
import CustomSoftware from "../pages/CustomSoftware.vue";
import DigitalMarketing from "../pages/DigitalMarketing.vue";
const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/career",
        component: Career,
        name: "Career",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/about",
        component: About,
        name: "About",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },

    //industries ecomerce page
    {
        path: "/industries/ecommerce",
        component: Ecommerce,
        name: "Ecommerce",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/industries/financial-technology",
        component: Fintech,
        name: "Fintech",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/industries/health",
        component: Health,
        name: "Health",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/industries/internet",
        component: Internet,
        name: "Internet",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/contact",
        component: Contact,
        name: "Contact",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/industries/transportation",
        component: Transportation,
        name: "Transportation",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/service/web-application",
        component: WebApplication,
        name: "WebApplication",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/service/mobile-application",
        component: MobileApplication,
        name: "MobileApplication",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/services/ui-ux-design",
        component: UiUxDesign,
        name: "UiUxDesign",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/services/digital-marketing",
        component: DigitalMarketing,
        name: "DigitalMarketing",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/services/custom-software",
        component: CustomSoftware,
        name: "CustomSoftware",
        meta: { requiresUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.requiresUser && isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Login" });
        //     }
        // },
    },
    {
        path: "/login",
        component: Login,
        name: "Login",
        meta: { guestUser: true, frontend: true },
        // beforeEnter: (to, _, next) => {
        //     if (to.meta.guestUser && !isAuthUser()) {
        //         next();
        //     } else {
        //         next({ name: "Home" });
        //     }
        // },
    },
];

export default routes;

function isAuthUser() {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) return true;
    return true;
}
