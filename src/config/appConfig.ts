interface AppConfig {
  logo: string;
  app_name: string;
  app_description: string;
  baseUrl: string;
}

const appConfig: AppConfig = {
  logo: "/icons-orange.png",
  app_name: "نارنج",
  app_description: "سلامت کودکان",
  baseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://narenj.demo.khateroshan.com/api/v1",
};

export default appConfig;
