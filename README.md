# Shift Paradigm AEM EDS Commerce Site

**If this is in the root of your repository, you are on the wrong branch; switch
to any `src/` branch. This branch is being built from another branch.**

This project uses Adobe Edge Delivery Services with Adobe Commerce.

## Environments
- Preview: https://{{branch}}--edge-delivery-demo--shiftparadigm.hlx.page/
- Live: https://{{branch}}--edge-delivery-demo--shiftparadigm.hlx.live/

## Local manual testing

1. Clone this repository.
1. Start AEM Proxy: `npx @adobe/aem-cli up` (opens your browser at `http://localhost:3000`) or run `npm start`

## End-to-end testing

1. Run tests locally with Playwright:
   `npm test`
1. Or specify an environment:
   `ENV=production npm test`

## Pre-built dependencies

AEM Edge Delivery boilerplate comes with a lot of pre-built dependencies. In this repository, we have:

- [Product listing pages](public/scripts/widgets/search.js), which appears
  to be built from https://github.com/adobe/storefront-product-listing-page
- [Storefront search box](public/scripts/widgets/LiveSearchAutocomplete.js),
  which looks like it is a version of
  [@magento/storefront-search-as-you-type](https://www.npmjs.com/package/@magento/storefront-search-as-you-type)
