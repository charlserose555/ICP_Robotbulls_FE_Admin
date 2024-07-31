import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Register = lazy(() => import("../../pages/general/auth/register"));
const Login = lazy(() => import("../../pages/general/auth/login"));

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
