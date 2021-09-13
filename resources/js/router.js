import { createRouter, createWebHistory } from "vue-router";
import AdminRoutes from "./admin/router/index.js";
import FrontRoutes from "./frontend/router/router";
const routes = [...AdminRoutes, ...FrontRoutes];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
