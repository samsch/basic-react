# basic-react
React base app.

To run, clone this project, and point a web server at public/.

This is just the bare minimum, with a hello world.

To make changes, run `npm install`, then you can run `npm run dev` to set Webpack to watch for changes and build with sourcemaps, or `npm run build` to build with uglify (and no sourcemaps).

## Easy server
If you don't have a server setup, you can use http-server from npm. Install globally with `$ npm install http-server -g`, then run `$ http-server public/` from the project root. You can then view the example app by navigating to `http://localhost:8080` in your browser.

##Credits
I followed the main body of instructions from this article: [Setting Up a React.js Environment Using Npm, Babel 6 and Webpack](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack) to setup Webpack and Babel.
