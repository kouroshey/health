import { routes } from "./routes.static";

export const mobileMenuItems = [
  {
    path: "/",
    name: "خانه",
    knownAs: "home",
    icon: "home",
  },
  {
    path: "#",
    name: "اطلاعیه‌ها",
    knownAs: "notification",
    icon: "notification",
  },
  {
    path: routes.stats.root,
    name: "گزارشات",
    knownAs: "stats",
    icon: "stats",
  },
  {
    path: routes.profile.root,
    name: "پروفایل",
    knowAs: "profile",
    icon: "profile",
  },
];
