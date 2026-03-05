// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  tailwindcss: {
    configPath: "~/tailwind.config.cjs",
    exposeConfig: false,
    viewer: false,
  },

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
        dir: "ltr",
      },
      {
        code: "ar",
        name: "العربية",
        file: "ar.json",
        dir: "rtl",
      },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      fallbackLocale: "en",
    },
  },

  runtimeConfig: {
    jwtSecret:
      process.env.JWT_SECRET ||
      "your-super-secret-jwt-key-change-in-production",
    adminEmail: process.env.ADMIN_EMAIL || "admin@Mohammed Qassim.com",
    adminPassword: process.env.ADMIN_PASSWORD || "admin123",
  },

  app: {
    head: {
      title: "Mohammed Qassim - Full Stack Developer Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Professional portfolio and system builder platform by Mohammed, a Full Stack Developer specializing in Vue, Nuxt, Angular, and ASP.NET Core.",
        },
        {
          name: "keywords",
          content:
            "Mohammed, Full Stack Developer, Vue, Nuxt, Angular, ASP.NET Core, Portfolio, Web Development",
        },
        {
          property: "og:title",
          content: "Mohammed Qassim - Full Stack Developer Portfolio",
        },
        {
          property: "og:description",
          content: "Professional portfolio and system builder platform",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  typescript: {
    strict: true,
  },
});
