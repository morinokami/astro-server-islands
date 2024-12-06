import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_ufT-IRkW.mjs';

const $$SlowComponent = createComponent(async ($$result, $$props, $$slots) => {
  await new Promise((resolve) => setTimeout(resolve, 1e3));
  return renderTemplate`${maybeRenderHead()}<div>🐢</div>`;
}, "/Users/sfujino/dev/astro-server-islands/src/components/SlowComponent.astro", void 0);

const $$file = "/Users/sfujino/dev/astro-server-islands/src/components/SlowComponent.astro";
const $$url = undefined;

export { $$SlowComponent as default, $$file as file, $$url as url };
