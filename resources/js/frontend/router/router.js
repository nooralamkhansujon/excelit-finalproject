import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
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
