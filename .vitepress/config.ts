import { defineConfig } from "vitepress";

const SITE = "https://webspam.github.io";

export default defineConfig({
  base: "/",
  title: "webspam",
  description: "Witcher 3 modding projects by webspam",
  cleanUrls: true,
  srcExclude: ["README.md"],
  themeConfig: {
    nav: [
      { text: "Light Rewrite", link: `${SITE}/LightRewrite/`, target: "_self" },
      { text: "WitcherScript", link: `${SITE}/witcherscript-vscode/`, target: "_self" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/webspam" }],
  },
});
