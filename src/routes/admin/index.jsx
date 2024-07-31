import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const user = lazy(() => import("../../pages/general/user/user"));
const account = lazy(() => import("../../pages/general/profile/account"));
const dashboard = lazy(() => import("../../pages/general/dashboard/dashboard"));
const description = lazy(() => import("../../pages/general/kyc/description"));
const upload = lazy(() => import("../../pages/general/kyc/upload"));
const plan = lazy(() => import("../../pages/general/invest/plan"));
const buyCrypto = lazy(() => import("../../pages/general/user/buyCrypto"));
const activity = lazy(() => import("../../pages/general/profile/activity"));

const tfa = lazy(() => import("../../pages/general/user/tfa"));

const routes = [
    {
        path: "/dashboard",
        component: dashboard,
    },
    {
        path: "/buy-crypto",
        component: buyCrypto,
    },
    {
        path: "/kyc/description",
        component: description,
    },
    {
        path: "/kyc/upload",
        component: upload,
    },
    {
        path: "/profile",
        component: account,
    },
    {
        path: "/profile/activity",
        component: activity,
    },
    {
        path: "/invest/plan",
        component: plan,
    },
    {
        path: "/dashboard/2FA",
        component: tfa,
    }
];

export default routes;
