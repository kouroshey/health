export const routes = {
  auth: {
    login: "/auth/login",
    verifyLogin: "/auth/verify-login",
    signUp: "/auth/sign-up",
  },
  home: "/",
  logout: "/logout",
  diet: {
    root: "/diet",
    supplementaryAdvice: "supplementary-advice",
    cookingMethods: "cooking-methods",
    calculateCalories: "calculate-calories",
    mealManagement: "meal-management",
  },
  mentalHealth: {
    root: "mental-health",
    result: "result",
  },
  physicalActivity: {
    root: "/physical-activity",
    result: "result",
  },
  sleep: {
    root: "sleep",
  },
  stats: {
    root: "/stats",
  },
  profile: {
    root: "profile",
  },
  subset: {
    root: "/subset",
    add: "subset/add",
    dashboard: "subset/dashboard",
  },
};
