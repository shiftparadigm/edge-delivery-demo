const e = "object", t = {
  event: {
    type: "string",
    const: "recs-item-click"
  },
  eventInfo: {
    type: "object",
    properties: {
      unitId: {
        type: "string"
      },
      productId: {
        type: "number"
      }
    },
    required: [
      "unitId",
      "productId"
    ]
  }
}, r = [
  "event",
  "eventInfo"
], n = {
  type: e,
  properties: t,
  required: r
};
export {
  n as default,
  t as properties,
  r as required,
  e as type
};
