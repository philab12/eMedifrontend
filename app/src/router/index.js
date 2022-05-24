import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
/* import UIComponents from "@/components/UIComponents.vue";
import SampleForm from "@/components/SampleForm.vue";
import SampleTable from "@/components/SampleTable.vue";*/
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
    /*{
           path: "/components",
           name: "UIComponents",
           component: UIComponents,
       },
       {
           path: "/form",
           name: "SampleForm",
           component: SampleForm,
       },
       {
           path: "/table",
           name: "SampleTable",
           component: SampleTable,
       },*/
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