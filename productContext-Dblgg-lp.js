const e = "object", t = {
  productContext: {
    type: "object",
    properties: {
      productId: {
        type: "number"
      },
      name: {
        type: "string"
      },
      sku: {
        type: "string"
      },
      topLevelSku: {
        type: [
          "string",
          "null"
        ]
      },
      specialToDate: {
        type: [
          "string",
          "null"
        ]
      },
      specialFromDate: {
        type: [
          "string",
          "null"
        ]
      },
      newToDate: {
        type: [
          "string",
          "null"
        ]
      },
      newFromDate: {
        type: [
          "string",
          "null"
        ]
      },
      createdAt: {
        type: [
          "string",
          "null"
        ]
      },
      updatedAt: {
        type: [
          "string",
          "null"
        ]
      },
      manufacturer: {
        type: [
          "string",
          "null"
        ]
      },
      countryOfManufacture: {
        type: [
          "string",
          "null"
        ]
      },
      categories: {
        type: [
          "array",
          "null"
        ],
        items: {
          type: "string"
        }
      },
      productType: {
        type: [
          "string",
          "null"
        ]
      },
      pricing: {
        type: "object",
        properties: {
          regularPrice: {
            type: "number"
          },
          minimalPrice: {
            type: "number"
          },
          maximalPrice: {
            type: "number"
          },
          specialPrice: {
            type: "number"
          },
          tierPricing: {
            type: "array",
            items: {
              type: "object",
              properties: {
                customerGroupId: {
                  type: [
                    "number",
                    "null"
                  ]
                },
                qty: {
                  type: "number"
                },
                value: {
                  type: "number"
                }
              },
              required: [
                "qty",
                "value"
              ]
            }
          },
          currencyCode: {
            type: [
              "string",
              "null"
            ]
          }
        },
        required: [
          "regularPrice"
        ]
      },
      canonicalUrl: {
        type: [
          "string",
          "null"
        ]
      },
      mainImageUrl: {
        type: [
          "string",
          "null"
        ]
      }
    },
    required: [
      "productId",
      "name",
      "sku"
    ]
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
