const routes = [
  {
    path: "/",
    component: () => import("layouts/BasicLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },

  {
    path: "/sign-up",
    component: () => import("layouts/BasicLayout.vue"),
    children: [
      {
        path: "",
        name: "Sign Up",
        component: () => import("pages/SignUpPage.vue"),
      },
    ],
  },

  {
    path: "/sign-in",
    component: () => import("layouts/BasicLayout.vue"),
    children: [
      {
        path: "",
        name: "Sign Up",
        component: () => import("pages/SignInPage.vue"),
      },
    ],
  },

  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "library",
        component: () => import("pages/LibraryPage.vue"),
        name: "Library",
      },

      {
        path: "stoa",
        component: () => import("pages/StoaPage.vue"),
        name: "Stoa",
      },

      {
        path: "account",
        component: () => import("pages/AccountPage.vue"),
        name: "Account",
      },

      {
        path: "search",
        component: () => import("pages/SearchPage.vue"),
        name: "Search",
      },

      {
        path: "entry",
        component: () => import("pages/EntryWriterPage.vue"),
        name: "Writer",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
