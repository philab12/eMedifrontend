import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UIComponents from "@/components/UIComponents.vue";
import SampleForm from "@/components/SampleForm.vue";
import SampleTable from "@/components/SampleTable.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
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
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;