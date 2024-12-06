import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dl1WfIXG.mjs';
import { manifest } from './manifest_BCqp6B-A.mjs';

const serverIslandMap = new Map([
	['SlowComponent', () => import('./chunks/SlowComponent_sLqdemOu.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/on-demand.astro.mjs');
const _page2 = () => import('./pages/server-island.astro.mjs');
const _page3 = () => import('./pages/static.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.0.3_rollup@4.28.1_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/on-demand.astro", _page1],
    ["src/pages/server-island.astro", _page2],
    ["src/pages/static.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9e4be749-4915-4186-8869-c99b749caa4c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
