import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRoute, canonicalFor } from "../data/seo";

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const r = getRoute(pathname);
    const url = canonicalFor(pathname);
    document.title = r.title;
    setMeta('meta[name="description"]', "content", r.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", r.title);
    setMeta('meta[property="og:description"]', "content", r.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", r.title);
    setMeta('meta[name="twitter:description"]', "content", r.description);
  }, [pathname]);

  return null;
}
