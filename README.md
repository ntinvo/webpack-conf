# Webpack Configuration
Webpack Configuration that can handle different file types.

## Features ✨
* Has a single javascript file as the entry point into the application.
* Handles `Javascript/ES6/React` code with both `.js` and `.jsx` file extensions, it will output a single `ES5` .js file bundle with a unique hash added to the filename.
* Handles `SCSS` code with `.scss` extensions; it will output a single .css file with a unique hash added to the filename.
* Handles IMG file with `.jpeg`, `.jpg`, `.png`, and `.gif` extensions; it will return a :link: link referencing the file.
* Handles SVG file with `.svg` extension; it will return a `base-64` data-encoded string if the file is less than 1MB and a :link: link to the file otherwise.

## Install 🚀

1. Clone the repository and go the the directory:
  ```
  $ git clone git@github.com:tinnvo/webpack-conf.git
  $ cd webpack-conf
  ```
2. Install the packages:
  ```
  $ npm install
  ```

  OR
  ```
  $ yarn install
  ```

3. Build and run, there are two ways:

    * Build the bundle and open the `index.html` file:
      ```
      $ npm run build
      $ open ./dist/index.html
      ```

      OR
      ```
      $ yarn build
      $ open ./dist/index.html
      ```

    * Start the webpack dev server:

      ```
      $ npm run start
      ```

      OR

      ```
      $ yarn start
      ```

## Built with 🔧

* [Webpack](https://webpack.js.org/) - an open-source JavaScript module bundler.
* [React](https://reactjs.org/) - a JavaScript library for building user interfaces.

## Images Resource ⬇️

* [Lovesvg](https://lovesvg.com/) - a free svg resources for crafters.
* [Iconarchive](http://www.iconarchive.com) - a professional tag based icon search engine with more than 600,000 icons for web developers, end users and graphic artists.

## Authors 🐶

* **Tin Vo** - *Initial work* - [Tin Vo](https://tinnvo.github.io/)

## License 📃

This project is licensed under the MIT License.
