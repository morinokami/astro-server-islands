import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_ufT-IRkW.mjs';
import { $ as $$Layout } from '../chunks/Layout_CFXWA7Hs.mjs';
import $$SlowComponent from '../chunks/SlowComponent_sLqdemOu.mjs';
export { renderers } from '../renderers.mjs';

const $$OnDemand = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>On Demand</h1> ${renderComponent($$result2, "SlowComponent", $$SlowComponent, {})} ` })}`;
}, "/Users/sfujino/dev/astro-server-islands/src/pages/on-demand.astro", void 0);

const $$file = "/Users/sfujino/dev/astro-server-islands/src/pages/on-demand.astro";
const $$url = "/on-demand";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OnDemand,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
