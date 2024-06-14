const e = "object", t = {
  storefrontInstanceContext: {
    type: "object",
    properties: {
      environmentId: {
        type: "string"
      },
      instanceId: {
        type: "string"
      },
      environment: {
        type: "string",
        enum: [
          "prod",
          "non-prod"
        ]
      },
      storeUrl: {
        type: "string"
      },
      websiteId: {
        type: "number"
      },
      websiteCode: {
        type: "string"
      },
      storeId: {
        type: "number"
      },
      storeCode: {
        type: "string"
      },
      storeViewId: {
        type: "number"
      },
      storeViewCode: {
        type: "string"
      },
      websiteName: {
        type: "string"
      },
      storeName: {
        type: "string"
      },
      storeViewName: {
        type: "string"
      },
      baseCurrencyCode: {
        type: "string"
      },
      storeViewCurrencyCode: {
        type: "string"
      },
      catalogExtensionVersion: {
        type: [
          "string",
          "null"
        ]
      },
      storefrontTemplate: {
        type: "string",
        enum: [
          "Franklin"
        ]
      }
    },
    required: [
      "environmentId",
      "environment",
      "storeUrl",
      "websiteId",
      "storeId",
      "storeViewId",
      "websiteName",
      "storeName",
      "storeViewName",
      "baseCurrencyCode",
      "storeViewCurrencyCode"
    ],
    additionalProperties: !1
  }
}, r = {
  type: e,
  properties: t
};
export {
  r as default,
  t as properties,
  e as type
};
