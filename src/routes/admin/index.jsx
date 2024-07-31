import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const dashboard = lazy(() => import("../../pages/admin/dashboard/dashboard"));

const routes = [
    {
        path: "/dashboard",
        component: dashboard,
    }
];

export default routes;
