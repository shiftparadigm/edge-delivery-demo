const e = "object", t = {
  units: {
    type: "array",
    items: {
      $ref: "#/definitions/RecommendationUnit"
    }
  }
}, r = {
  RecommendationUnit: {
    type: "object",
    properties: {
      unitId: {
        type: "string"
      },
      unitName: {
        type: "string"
      },
      unitType: {
        type: "string"
      },
      searchTime: {
        type: "number"
      },
      totalProducts: {
        type: "number"
      },
      primaryProducts: {
        type: "number"
      },
      backupProducts: {
        type: "number"
      },
      products: {
        type: "array",
        items: {
          $ref: "#/definitions/RecommendedProduct"
        }
      },
      pagePlacement: {
        type: [
          "string",
          "null"
        ]
      },
      typeId: {
        type: "string"
      },
      yOffsetTop: {
        type: [
          "number",
          "null"
        ]
      },
      yOffsetBottom: {
        type: [
          "number",
          "null"
        ]
      }
    },
    required: [
      "unitId",
      "unitName",
      "unitType",
      "searchTime",
      "totalProducts",
      "primaryProducts",
      "backupProducts",
      "products",
      "pagePlacement",
      "typeId"
    ]
  },
  RecommendedProduct: {
    type: "object",
    properties: {
      rank: {
        type: "number"
      },
      score: {
        type: "number"
      },
      sku: {
        type: "string"
      },
      name: {
        type: "string"
      },
      productId: {
        type: "number"
      },
      shortDescription: {
        type: [
          "string",
          "null"
        ]
      },
      type: {
        type: "string"
      },
      visibility: {
        type: "string"
      },
      categories: {
        type: "array",
        items: {
          type: "string"
        }
      },
      weight: {
        type: "number"
      },
      weightType: {
        type: [
          "string",
          "null"
        ]
      },
      currency: {
        type: "string"
      },
      image: {
        $ref: "#/definitions/Image"
      },
      smallImage: {
        $ref: "#/definitions/Image"
      },
      thumbnailImage: {
        $ref: "#/definitions/Image"
      },
      swatchImage: {
        type: [
          "string",
          "null"
        ]
      },
      url: {
        type: "string"
      },
      prices: {
        $ref: "#/definitions/Prices"
      },
      queryType: {
        type: "string"
      }
    },
    required: [
      "rank",
      "score",
      "sku",
      "name",
      "productId",
      "type",
      "visibility",
      "categories",
      "weight",
      "url",
      "queryType"
    ]
  },
  Image: {
    type: "object",
    properties: {
      label: {
        type: [
          "string",
          "null"
        ]
      },
      url: {
        type: "string"
      }
    },
    required: [
      "url"
    ]
  },
  Prices: {
    type: "object",
    properties: {
      maximum: {
        $ref: "#/definitions/Price"
      },
      minimum: {
        $ref: "#/definitions/Price"
      }
    },
    required: [
      "maximum",
      "minimum"
    ]
  },
  Price: {
    type: "object",
    properties: {
      finalAdjustments: {
        type: "array",
        items: {
          $ref: "#/definitions/Adjustment"
        }
      },
      final: {
        type: "number"
      },
      regular: {
        type: "number"
      },
      regularAdjustments: {
        type: "array",
        items: {
          $ref: "#/definitions/Adjustment"
        }
      }
    },
    required: [
      "finalAdjustments",
      "final",
      "regular",
      "regularAdjustments"
    ]
  },
  Adjustment: {
    type: "object",
    properties: {
      code: {
        type: "string"
      },
      amount: {
        type: "number"
      }
    },
    required: [
      "code",
      "amount"
    ]
  }
}, i = {
  type: e,
  properties: t,
  definitions: r
};
export {
  i as default,
  r as definitions,
  t as properties,
  e as type
};
