const i = () => {
  const { href: e } = window.location;
  let n = "prod";
  e.includes(".hlx.page") && (n = "stage"), e.includes("localhost") && (n = "dev");
  const o = window.sessionStorage.getItem("environment");
  return o && n !== "prod" ? o : n;
};
function r(e) {
  return e || i(), new URL(`${window.location.origin}/configs.json`);
}
const g = async (e) => {
  const n = e || i();
  let o = window.sessionStorage.getItem(`config:${n}`);
  return o || (o = await fetch(r(n)).then((t) => t.text()), window.sessionStorage.setItem(`config:${n}`, o)), o;
}, a = async (e, n) => {
  var s;
  const o = n || i(), t = await g(o);
  return (s = JSON.parse(t).data.find((c) => c.key === e)) == null ? void 0 : s.value;
};
export {
  i as calcEnvironment,
  a as getConfigValue
};
