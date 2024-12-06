import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_ufT-IRkW.mjs';
import { $ as $$Layout } from '../chunks/Layout_CFXWA7Hs.mjs';
import $$SlowComponent from '../chunks/SlowComponent_sLqdemOu.mjs';
export { renderers } from '../renderers.mjs';

const $$ServerIsland = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Server Island</h1> ${renderComponent($$result2, "SlowComponent", $$SlowComponent, { "server:defer": true, "server:component-directive": "defer", "server:component-path": "/Users/sfujino/dev/astro-server-islands/src/components/SlowComponent.astro", "server:component-export": "default" }, { "fallback": ($$result3) => renderTemplate`<div>Loading...</div>` })} ` })}`;
}, "/Users/sfujino/dev/astro-server-islands/src/pages/server-island.astro", void 0);

const $$file = "/Users/sfujino/dev/astro-server-islands/src/pages/server-island.astro";
const $$url = "/server-island";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ServerIsland,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
