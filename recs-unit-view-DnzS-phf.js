const e = "object", t = {
  event: {
    type: "string",
    const: "recs-unit-view"
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
}, n = [
  "event",
  "eventInfo"
], r = {
  type: e,
  properties: t,
  required: n
};
export {
  r as default,
  t as properties,
  n as required,
  e as type
};
