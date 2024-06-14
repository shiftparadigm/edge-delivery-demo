const e = "object", t = {
  pageContext: {
    type: "object",
    properties: {
      pageType: {
        type: "string",
        enum: [
          "CMS",
          "Category",
          "Product",
          "Cart",
          "Checkout",
          "PageBuilder"
        ]
      },
      pageName: {
        type: "string"
      },
      eventType: {
        type: "string",
        enum: [
          "pageUnload",
          "visibilityHidden"
        ]
      },
      maxXOffset: {
        type: "number"
      },
      maxYOffset: {
        type: "number"
      },
      minXOffset: {
        type: "number"
      },
      minYOffset: {
        type: "number"
      },
      ping_interval: {
        type: "number"
      },
      pings: {
        type: "number"
      }
    },
    required: [
      "pageType",
      "maxXOffset",
      "maxYOffset",
      "minXOffset",
      "minYOffset"
    ]
  }
}, p = {
  type: e,
  properties: t
};
export {
  p as default,
  t as properties,
  e as type
};
