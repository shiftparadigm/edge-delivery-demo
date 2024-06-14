# Contributing to EDS-Evident-Website

## Branching Strategy

All source-code branches must be prefixed with `src/`.

- `src/main` represents the latest fully-approved code. Start branches from this
  branch.
- `src/*` should be used for the various tasks for the project. You may
  merge other `src/*` branches into these branches if there is prerequite
  work that has not been merged to main.

## Coding Styleguides

We enforce a coding styleguide using `eslint`. As part of your build, run `npm
run lint` to check if your code is conforming to the style guide. We do the same
for every PR in our CI, so PRs will get rejected if they don't follow the style
guide.

You can fix some of the issues automatically by running `npm run lint:fix`.
