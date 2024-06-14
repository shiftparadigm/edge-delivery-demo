const t = "object", e = {
  categoryContext: {
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      urlKey: {
        type: "string"
      },
      urlPath: {
        type: "string"
      }
    },
    required: [
      "name",
      "urlKey",
      "urlPath"
    ]
  }
}, r = {
  type: t,
  properties: e
};
export {
  r as default,
  e as properties,
  t as type
};
