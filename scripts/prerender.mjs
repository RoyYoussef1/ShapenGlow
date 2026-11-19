import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, routes, buildHead, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const today = new Date().toISOString().slice(0, 10);

for (const route of Object.keys(routes)) {
  const html = template
    .replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, buildHead(route))
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${route} -> dist/${file}`);
}

const urls = Object.keys(routes)
  .map(
    (r) =>
      `  <url>\n    <loc>${r === "/" ? `${SITE_URL}/` : SITE_URL + r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r === "/" ? "1.0" : "0.8"}</priority>\n  </url>`
  )
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log("wrote dist/sitemap.xml");

fs.rmSync(ssrDir, { recursive: true, force: true });
