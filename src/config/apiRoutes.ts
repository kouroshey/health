const authRoutes = {
  login: "user/login",
  verifyLogin: "user/verify",
  signUp: "user/signup",
};

const appRoutes = {
  subset: {
    add: "user/add",
    list: "user/list",
    provincesAndCities: "provinces-cities",
  },
  healthMetric: {
    store: "user/health-metrics/store",
    list: "user/health-metric/list",
  },
  diet: {
    list: "diet-plan",
    cookingMethods: "general-content/cooking_methods",
    supplementationAdvice: "general-content/supplementation_advise",
  },
  public: {
    foods: "food",
  },
};

export { authRoutes, appRoutes };
