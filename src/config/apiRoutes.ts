const authRoutes = {
  login: "user/login",
  verifyLogin: "user/verify",
  signUp: "user/signup",
};

const appRoutes = {
  subset: {
    add: "user/add",
    list: "user/list",
  },
  healthMetric: {
    store: "user/health-metrics/store",
    list: "user/health-metric/list",
  },
};

export { authRoutes, appRoutes };
