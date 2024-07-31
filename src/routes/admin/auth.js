import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Register = lazy(() => import("../../pages/admin/auth/register"));
const Login = lazy(() => import("../../pages/admin/auth/login"));

const routes = [
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/login",
        component: Login,
    }
];

export default routes;
