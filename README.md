# Webpack Configuration
Webpack Configuration that can handle different file types

## Features ✨
* Has a single javascript file as the entry point into the application
* Handles `Javascript/ES6/React` code with both `.js` and `.jsx` file extensions, it will output a single `ES5` .js file bundle with a unique hash added to the filename
* Handles `SCSS` code with `.scss` extensions; it will output a single .css file with a unique hash added to
the filename
* Handles IMG file with `.jpeg`, `.jpg`, `.png`, and `.gif` extensions; it will return a :link: link referencing the file
* Handles SVG file with `.svg` extension; it will return a `base-64` data-encoded string if the file is &lt; 1MB and a :link: link to the file otherwise

## Installing 🚀

1. Clone the repository:
  ```
    git clone git@github.com:tinnvo/webpack-conf.git
  ```
2. Install the packages:
  ```
    npm install
  ```

3. Build and run:
  TODO

## Built With 🔧

* [Webpack](https://webpack.js.org/) - an open-source JavaScript module bundler.


## Authors 🐶

* **Tin Vo** - *Initial work* - [Tin Vo](https://tinnvo.github.io/)

## License 📃

This project is licensed under the MIT License
