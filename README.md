# webpack-typescript-example

A webpack with typescript/ts-loader config example

## Installation

Run `npm install --save-dev` to install all dependencies.

## Developing

When developing, all typescript must go into the `src/index.ts` file, either directly or via module imports. Webpack then compiles this file into `dist/bundle.js` which you can then reference to in your HTML.

## Scripts

| Script | Description | Command | 
| --- | --- | --- |
| build | Webpack bundles the project for development. | `npm run build` |
| build:prod | Webpack bundles the project for production. | `npm run build:prod` |
| watch | Webpack watches for changes and bundles the project for development. | `npm run watch` |
| serve | Webpack starts a dev server on port 8080, serving content from the `/dist` directory. | `npm run serve` | 

### Author

Kevin From

[npm](https://www.npmjs.com/~kevinfrom)

[Linkedin](https://linkedin.com/in/kevinfrom)

[Github](https://github.com/kevinfrom)