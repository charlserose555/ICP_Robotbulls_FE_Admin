import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const dashboard = lazy(() => import("../../pages/admin/dashboard/dashboard"));
const trnx = lazy(() => import("../../pages/admin/manage/trnx"));
const messages = lazy(() => import("../../pages/admin/manage/messages"));
const kycList = lazy(() => import("../../pages/admin/manage/kycList"));
const walletChange = lazy(() => import("../../pages/admin/manage/walletChange"));
const ambassadors = lazy(() => import("../../pages/admin/manage/ambassadors"));
const userList = lazy(() => import("../../pages/admin/search/userList"));
const activities = lazy(() => import("../../pages/admin/analytics/activities"));
const icoStage = lazy(() => import("../../pages/admin/settings/icoStage"));
const paymentMethods = lazy(() => import("../../pages/admin/settings/paymentMethods"));
const language = lazy(() => import("../../pages/admin/settings/language"));
const referralSetting = lazy(() => import("../../pages/admin/settings/referralSetting"));
const webSite = lazy(() => import("../../pages/admin/settings/webSite"));
const icoSetting = lazy(() => import("../../pages/admin/settings/icoSetting"));
const email = lazy(() => import("../../pages/admin/settings/email"));
const pages = lazy(() => import("../../pages/admin/settings/pages"));

const routes = [
    {
        path: "/dashboard",
        component: dashboard,
    },
    {
        path: "/manage/trnx",
        component: trnx,
    },
    {
        path: "/manage/message",
        component: messages,
    },
    {
        path: "/manage/kycList",
        component: kycList,
    },
    {
        path: "/manage/walletChange",
        component: walletChange,
    },
    {
        path: "/manage/ambassadors",
        component: ambassadors,
    },
    {
        path: "/search/userList",
        component: userList,
    },
    {
        path: "/search/transactions",
        component: userList,
    },
    {
        path: "/search/wallets",
        component: userList,
    },
    {
        path: "/analytics/activities",
        component: activities,
    },
    {
        path: "/settings/ico-stage",
        component: icoStage,
    },
    {
        path: "/settings/ico-setting",
        component: icoSetting,
    },
    {
        path: "/settings/payment-methods",
        component: paymentMethods,
    },
    {
        path: "/settings/language",
        component: language,
    },
    {
        path: "/settings/referral",
        component: referralSetting,
    },
    {
        path: "/settings/webSite",
        component: webSite,
    },
    {
        path: "/settings/ico-setting",
        component: icoSetting,
    },
    {
        path: "/settings/email",
        component: email,
    },
    {
        path: "/settings/pages",
        component: pages,
    }
];

export default routes;
