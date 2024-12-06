import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_ufT-IRkW.mjs';
import { $ as $$Layout } from '../chunks/Layout_CFXWA7Hs.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul> <li> <a href="/static">Static</a> </li> <li> <a href="/on-demand">On Demand</a> </li> <li> <a href="/server-island">Server Island</a> </li> </ul> ` })}`;
}, "/Users/sfujino/dev/astro-server-islands/src/pages/index.astro", void 0);

const $$file = "/Users/sfujino/dev/astro-server-islands/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
