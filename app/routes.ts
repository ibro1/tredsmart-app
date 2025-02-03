import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  {
    element: () => import("./components/layout/MainLayout"),
    children: [
      index("routes/index.tsx"),
      route("docs/*", "routes/docs.tsx"),
      route("influencers", "routes/influencers.tsx"),
      route("trades", "routes/trades.tsx"),
      route("analytics", "routes/analytics.tsx"),
      route("dashboard", "routes/dashboard.tsx"),
    ],
  },
] satisfies RouteConfig;
