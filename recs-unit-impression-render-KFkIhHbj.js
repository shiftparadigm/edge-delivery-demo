const e = "object", t = {
  event: {
    type: "string",
    const: "recs-unit-impression-render"
  },
  eventInfo: {
    type: "object",
    properties: {
      unitId: {
        type: "string"
      }
    },
    required: [
      "unitId"
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
