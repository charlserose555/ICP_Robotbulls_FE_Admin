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
        path: "/admin/manage/walletchange",
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
    path: "/admin/profile",
    icon: "home.png",
    name: "Search",
    role: "user",
    routes: [
      {
        path: "/admin/invest/plan",
        name: "Users List",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Transactions",
        icon: "slot.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Wallets",
        icon: "slot.png",
      }
    ]
  },
  {
    path: "/admin/profile",
    icon: "home.png",
    name: "Analytics",
    role: "user",
    routes: [
      {
        path: "/admin/invest/plan",
        name: "Activities",
        icon: "allGame.png",
      }
    ]
  },
  {
    path: "/admin/profile",
    icon: "home.png",
    name: "Settings",
    role: "user",
    routes: [
      {
        path: "/admin/invest/plan",
        name: "ICO/STO Stage",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "ICO/STO Setting",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Website Setting",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Referral Setting",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Mailing Setting",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Payment Methods",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Manage Pages",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Application API",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "Manage Languages",
        icon: "allGame.png",
      },
      {
        path: "/admin/invest/plan",
        name: "System Status",
        icon: "allGame.png",
      }
    ]
  }
];

export default routes;
