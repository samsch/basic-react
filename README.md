# basic-react
React base app.

To run, clone this project, and point a web server at public/.

This is just the bare minimum, with a hello world. Babel is configured to compile using the "latest" preset, and babel-polyfill is included.

To make changes, run `npm install`, then you can run `npm run dev` to set Webpack to watch for changes and build with sourcemaps, or `npm run build` to build with uglify (and no sourcemaps). The build script includes the proper configuration to put React into production mode, so code built with `npm run build` is production ready. React will not display warnings, and errors will not have the helpful messages like they do in dev mode. This is what you want for production.

You can read how to setup this project in my [Getting started with React guide](https://samuelscheiderich.com/2016/07/04/Getting-started-with-React/).

## Easy server
If you don't have a server setup, you can use http-server from npm. Install globally with `$ npm install http-server -g`, then run `$ http-server public/` from the project root. You can then view the example app by navigating to `http://localhost:8080` in your browser.

## Credits
Originally, I followed the main body of instructions from this article: [Setting Up a React.js Environment Using Npm, Babel 6 and Webpack](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack) to setup Webpack and Babel. Since then, I've added in some of the basic features I consider necessary for the boilerplate, including production configuration for React and babel-polyfill.
