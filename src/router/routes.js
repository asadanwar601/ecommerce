const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    redirect: { name: "index" },
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/crud",
        name: "crud",
        component: () => import("pages/CRUDpage.vue"),
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
