/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */

const routes = [
  {
    path: "/admin/dashboard",
    icon: "home.png",
    name: "Dashboard",
    role: "user",
  },
  {
    icon: "home.png",
    name: "Management",
    role: "user",
    path: "/admin/manage",
    routes: [
      {
        path: "/admin/manage/trnx",
        name: "Expiring Trnx",
        icon: "allGame.png",
      },
      {
        path: "/admin/manage/message",
        name: "Messages",
        icon: "slot.png",
      },
      {
        path: "/admin/manage/kyclist",
        name: "KYC List",
        icon: "slot.png",
      },
      {
        path: "/admin/manage/walletChange",
        name: "Wallet Change",
        icon: "slot.png",
      },
      {
        path: "/admin/manage/ambassadors",
        name: "Ambassadors",
        icon: "slot.png",
      }
    ]
  },
  {
    icon: "home.png",
    name: "Search",
    role: "user",
    path: "/admin/search",
    routes: [
      {
        path: "/admin/search/userList",
        name: "Users List",
        icon: "allGame.png",
      },
      {
        path: "/admin/search/transactions",
        name: "Transactions",
        icon: "slot.png",
      },
      {
        path: "/admin/search/wallets",
        name: "Wallets",
        icon: "slot.png",
      }
    ]
  },
  {
    icon: "home.png",
    name: "Analytics",
    role: "user",
    path: "/admin/analytics",
    routes: [
      {
        path: "/admin/analytics/activities",
        name: "Activities",
        icon: "allGame.png",
      }
    ]
  },
  {
    icon: "home.png",
    name: "Settings",
    role: "user",
    path: "/admin/settings",
    routes: [
      {
        path: "/admin/settings/ico-stage",
        name: "ICO/STO Stage",
        icon: "allGame.png",
      },
      {
        path: "/admin/settings/ico-setting",
        name: "ICO/STO Setting",
        icon: "allGame.png",
      },
      {
        path: "/admin/settings/webSite",
        name: "Website Setting",
        icon: "allGame.png",
      },
      {
        path: "/admin/settings/referral",
        name: "Referral Setting",
        icon: "allGame.png",
      },
      {
        path: "/admin/settings/email",
        name: "Mailing Setting",
        icon: "allGame.png",
      },
      {
        path: "/admin/settings/payment-methods",
        name: "Payment Methods",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Manage Pages",
        icon: "allGame.png",
      },
      {
        path: "/admin/settings/language",
        name: "Manage Languages",
        icon: "allGame.png",
      },
      {
        path: "/admin/settings/ico-setting",
        name: "Manage Languages",
        icon: "allGame.png",
      }
    ]
  }
];

export default routes;
