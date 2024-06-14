function n(t, e = document) {
  const r = t && t.includes(":") ? "property" : "name";
  return Array.from(e.head.querySelectorAll(`meta[${r}="${t}"]`)).map((a) => a.content).join(", ") || "";
}
export {
  n as g
};
