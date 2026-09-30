---
layout: home
markdownStyles: false
hero:
  name: webspam
features:
  - title: Light Rewrite
    details: A different kind of lighting mod for The Witcher 3.
    link: https://webspam.github.io/LightRewrite/
    linkText: Visit site
    target: _self
---

<script setup>
import { VPFeatures } from "vitepress/theme";

const blurbs = [
  {
    title: "WitcherScript",
    details: "WitcherScript language support for VS Code, with code completion, diagnostics, and more.",
    link: "https://webspam.github.io/witcherscript-vscode/",
    linkText: "Visit site",
    target: "_self",
  },
  {
    title: "Wiki",
    details: "Some things found whilst modding.",
    link: "/wiki/scripts/rsblob",
    linkText: "Browse wiki",
  },
];
</script>

<div class="section-divider">
  <div class="section-divider-inner">
    <span class="section-divider-label">For modders</span>
  </div>
</div>

<VPFeatures :features="blurbs" />

<style scoped>
.section-divider {
  padding: 2.5rem 1.5rem 1.5rem;
}

@media (min-width: 40rem) {
  .section-divider {
    padding-inline: 3rem;
  }
}

@media (min-width: 60rem) {
  .section-divider {
    padding-inline: 4rem;
  }
}

.section-divider-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  max-width: 72rem;
}

.section-divider-inner::before,
.section-divider-inner::after {
  content: "";
  flex: 1;
  border-top: 1px solid var(--vp-c-divider);
}

.section-divider-label {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}
</style>
