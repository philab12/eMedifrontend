import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DashboardView from "@/views/DashboardView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";
import SelectPortalView from "@/views/SelectPortalView.vue";
import ProvidersView from "@/views/ProvidersView.vue";
import SupportMembersView from "@/views/SupportMembersView.vue";
import DependantsView from "@/views/DependantsView.vue";
import AllUsersView from "@/views/AllUsersView.vue";
import LinkUsersToProvidersView from "@/views/LinkUsersToProvidersView.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/dashboard",
        name: "DashboardView",
        component: DashboardView,
    },
    {
        path: "/register",
        name: "RegisterView",
        component: RegisterView,
    },
    {
        path: "/forgot-password",
        name: "ForgotPasswordView",
        component: ForgotPasswordView,
    },
    {
        path: "/reset-password",
        name: "ResetPasswordView",
        component: ResetPasswordView,
    },
    {
        path: "/select-portal",
        name: "SelectPortalView",
        component: SelectPortalView,
    },
    {
        path: "/providers",
        name: "ProvidersView",
        component: ProvidersView,
    },
    {
        path: "/support-members",
        name: "SupportMembersView",
        component: SupportMembersView,
    },
    {
        path: "/dependants",
        name: "DependantsView",
        component: DependantsView,
    },
    {
        path: "/users",
        name: "AllUsersView",
        component: AllUsersView,
    },
    {
        path: "/link-users-to-providers",
        name: "LinkUsersToProvidersView",
        component: LinkUsersToProvidersView,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;