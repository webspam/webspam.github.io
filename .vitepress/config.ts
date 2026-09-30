import { defineConfig } from "vitepress";

const SITE = "https://webspam.github.io";

export default defineConfig({
  base: "/",
  title: "webspam",
  description: "Witcher 3 modding projects by webspam",
  cleanUrls: true,
  srcExclude: ["README.md"],
  lastUpdated: true,
  themeConfig: {
    search: { provider: "local" },
    editLink: {
      pattern: "https://github.com/webspam/webspam.github.io/edit/main/:path",
      text: "Edit this page on GitHub",
    },
    nav: [
      { text: "Light Rewrite", link: `${SITE}/LightRewrite/`, target: "_self" },
      { text: "WitcherScript", link: `${SITE}/witcherscript-vscode/`, target: "_self" },
      { text: "Wiki", link: "/wiki/scripts/rsblob" },
    ],
    sidebar: {
      "/wiki/": [
        {
          text: "REDkit",
          items: [{ text: "Building .rsblob files", link: "/wiki/scripts/rsblob" }],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/webspam" }],
  },
});
