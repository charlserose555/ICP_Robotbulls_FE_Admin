import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Terms = lazy(() => import("../../pages/admin/help/terms"));
const Policy = lazy(() => import("../../pages/admin/help/policy"));

const routes = [
    {
        path: "/privacy-policy",
        component: Policy,
    },
    {
        path: "/terms-of-service",
        component: Terms,
    }
];

export default routes;
