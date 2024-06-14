const { default: a } = await import("./validator-D0uOQnE3.js"), e = new a(), r = /^\.\/schemas\/(.+)\.json$/, i = /* @__PURE__ */ Object.assign({ "./schemas/categoryContext.json": () => import("./categoryContext-DgzTnFA1.js"), "./schemas/eventForwardingContext.json": () => import("./eventForwardingContext-7EKI5Usv.js"), "./schemas/page-view.json": () => import("./page-view-BzALi7eC.js"), "./schemas/pageContext.json": () => import("./pageContext-CEbJ94dg.js"), "./schemas/product-page-view.json": () => import("./product-page-view-xJAIbcbV.js"), "./schemas/productContext.json": () => import("./productContext-Dblgg-lp.js"), "./schemas/recommendationsContext.json": () => import("./recommendationsContext-CDn7teCe.js"), "./schemas/recs-api-request-sent.json": () => import("./recs-api-request-sent-dTzNu67W.js"), "./schemas/recs-api-response-received.json": () => import("./recs-api-response-received-ULPbLrbB.js"), "./schemas/recs-item-click.json": () => import("./recs-item-click-CJd2F0Vf.js"), "./schemas/recs-unit-impression-render.json": () => import("./recs-unit-impression-render-KFkIhHbj.js"), "./schemas/recs-unit-view.json": () => import("./recs-unit-view-DnzS-phf.js"), "./schemas/storefrontInstanceContext.json": () => import("./storefrontInstanceContext-D_ThNsBs.js") });
for (const [t, o] of Object.entries(i)) {
  const s = r.exec(t);
  if (!s)
    continue;
  const n = s[1], c = await o();
  e.addSchema(c, n);
}
e.start();
