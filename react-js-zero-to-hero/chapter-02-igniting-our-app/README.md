# Bundlers - webpack, parcel

1. What are bundlers?

A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser

Bundlers are tools that help you write code in modules and then bundle them together into small packages to be used in the browser. They take away the hassle of manually creating scripts and linking them together. They also help you to use the latest JavaScript features, regardless of whether your users’ browsers support them.

Q. What is `Parcel/Webpack`? Why do we need it?

Parcel/Webpack is a bundler that means all the javascript code written in different files and folders
including all the dependencies and packages are bundled and minified in a single file which is then given
to the browser.
They provide many different advantges like Hot Module Replacement, Caching etc.

2. Examples of Bundlers:

- webpack
- parcel
- rollup
- browserify
- vite
- esbuild

3. What is webpack?

webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

4. What is parcel?

- Parcel is the beast

Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.

- bundles all our code and build minified production ready
- hot module REPLACEMENT - HMR
- watching our file in changes - File Watcher Algorithm C++ - Parcel keeps analyzing the files and automatically updates the changes which
  are being made ny the developer in the project.
- Bundling
- Minifing our code
- Cleaning our code
- dev and production build
- super fast build algorithm
- Image optimization
- CSS, JS optimization
- Caching while development - Caching improves the performance of the application. Once cache has
  been created then the subsequent builds will take lesser time which makes the application faster.
- compatible with older versions of browsers
- https on dev
- port number
- consistent hashing algorithm to cache things up
- zero config - no need of many configurations. No configuration is required in order to use parcel in the application.
- no need of webpack.config.js

[Parcel Development](https://parceljs.org/features/development/)

## Transitive Dependencies

1. What are transitive dependencies?

Transitive dependencies are dependencies of your dependencies. They are dependencies that are not explicitly listed in your package.json file, but are installed as a result of installing other dependencies.

## Dependency Tree

1. What is dependency tree?

Dependency tree is a tree structure that shows the dependencies of a project.

Q. What factors affect on buliding development ready or production ready app?

- size of the app
- size of the code
- size of the dependencies
- size of the libraries
- size of the frameworks

# npm

1. What is npm?

NPM is a package manager for all the modules and packages that are used in a projects.
NPM is used for installing packages and publishing our own packages as well.

- an online repository for the publishing of open-source Node.js projects
- a command-line utility for interacting with said repository that aids in
  - package installation,
  - version management, and
  - dependency management.

2. What is the use of npm?

npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you’re sharing. It’s built on Node.js, npm, and Git, and is distributed with the Node.js binary distribution.

https://github.com/npm/npm-expansions/blob/master/expansions.txt

- is used to manage our packages

Q. Why do we want npm in react app?

- react runs on other super powers given by various other packages. to handle these packages npm is needed in react app.

## Installing parcel using npm as devDependency

- npm install -D parcel-bundler

### Explanation

- `npm install -D parcel-bundler`

- `npm install` - install all the dependencies
- `-D` - install as devDependency
- `parcel-bundler` - package name

Q. What is devDependencies?

- devDependencies are the packages that are used in development only. They are not required in production.

Q. Differences between dependencies and devDependencies?

- dependencies are the packages that are required in production.
- devDependencies are the packages that are used in development only. They are not required in production.
- The devDependencies are those dependencies which are installed only the developer machine but dependencies on the
  other hand project depends to run everywhere.

# package.json

1. What is package.json?

package.json is a file that contains all the dependencies of your project. It is used to give information to npm that allows it to identify the project as well as handle the project’s dependencies.

2. What is the use of package.json?

package.json is used to give information to npm that allows it to identify the project as well as handle the project’s dependencies.

3. What is the use of npm init?

npm init is used to create a package.json file.

4. What is the use of npm install?

npm install is used to install all the dependencies of the project.

5. What is the use of npm install -D?

npm install -D is used to install all the devDependencies of the project or used for development and as a development dependency.

6. What is the use of npm install -g?

npm install -g is used to install a package globally on your system.

7. What is the use of npm install -S?

npm install -S is used to install a package and save it as a dependency in package.json.

# tilde and caret

## package-lock.json

1. What is package-lock.version?

package-lock.version is a property in package-lock.json file. It is used to specify the version of the package-lock.json file format.

package.lock.json is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. It is used to ensure that the same versions of dependencies are installed when you run npm install on another machine.

2. Key to remember in package-lock.version:

- package-lock.version is a property in package-lock.json file. It is used to specify the version of the package-lock.json file format.
- has integrity: maintains the hash of the package-lock file which insures what version of package was running on my system and is exactly the same on production.
- important file, lock the version packages , `never have to keep in .gitignore`

## node modules

1. What is node_modules?

node_modules is a directory that contains all the dependencies of the project.

- database of npm
- heaviest object in the universe

## Why not to use cdn links for react

- has to change the version in link if changes.
- unpkg
- react is available in cdn js not in server

# React

1. What is React?

React is a JavaScript library for building user interfaces.

## Installing React using npm

- `npm install react react-dom`

# npx

1. What is npx?

npx is a package runner tool that comes bundled with npm 5.2+. npx is tool which allows to run executables from the packages without letting the packages to be installed
globally. It also automatically installs the package if not installed already.

- means execute using npm

`npx parcel index.html`

- execute parcel using npm and give entry point index.html
- creates development build for us and it's hosted on our server
- creates -parcel.cache
- All the development ready files will be in dist folder
- create a server and enabled HMR

`npx parcel build index.html`

- creates production build for us and it's hosted on our server
- All the production ready files will be in dist folder

- `npx` - execute using npm
- `parcel` - package name
- `index.html` - entry point file name

# module

1. What is module?

A module is a piece of code that is used to perform a specific task. It is a collection of functions and data.

In Parcel,

2. What is Hot Module Reloading?

Hot Module Reloading is a feature that allows you to update the code of your app without reloading the entire page. It is a feature that is available in webpack and parcel.
When the developer saves the project then parcel automatically updates the modules in runtime without letting
the developer to reload the page.

3. How HMR works?

HMR works by replacing modules in the browser without a full reload. This means that the state of your app is preserved. You can edit your components and see the changes without losing the state of your app.

There is sth known as File Watcher Algorithm, written in C++.

4. What is .parcel-cache?

.parcel-cache is a directory that contains all the cache files of parcel.
This is a directory which is created when the build of the project is created. Parcel stored information
about the project like what dependencies are being used. For the first build, parcel takes time but for the
subsequent builds it will take lesser time as it will use the cache already created.
Inside the directory:

- cache - contains the cache files
- tmp - contains the temporary files
- HMR
- File Watcher Algorithms
- Minification of files
- random binary files

5. What is .cache?

.cache is a directory that contains all the cache files of webpack.

6. What is cache files?

Cache files are files that are created by the bundler to speed up the build process.

## dist folder

1. What is dist folder?

dist folder is a directory that contains all the files that are generated by the bundler. dist is the folder which is created when the build of the application is created. It contains the bundled
and minified code. It contains all the assets of the application all the images and media which is
processed and optimized as part of the build.

- minified files by parcel, webpack
- production ready files

Q. How do I make my app compatible with older browsers using browserlist?

- add browserslist in package.json
- add browserslist in .babelrc

## [browserslist](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

## What is Tree Shaking?

Tree Shaking is also called Dead Code Elimination. Parcel analyzes all the modules for imports and exports
and eliminates all the things which are unused. Works for both dynamic and static imports.

## What is `.gitignore`? What should we add and not add into it?

.gitignore is a file in which those files are added which are not supossed to be tracked by git while
pushing to the git repository.

## What is the difference between `package.json` and `package-lock.json`

package.json defines all the packages and modules with their version on which the application is running on
and also defines all the scripts which are created by the developers. It contains all the metadata about the
application

package-lock.json file is generated automatically which contains locks the versions of the dependencies
on the which the application is running and also contains the record of all the dependencies and their dependencies
on which the application is running. So when someone will install the project they will have the same
version of the dependencies.

## Why should I not modify `package-lock.json`?

If package-lock.json is modified then it might lead to inconsistency and conflicts in the versions of the dependencies
and may cause problem is successful installation of the application.

## What is `node_modules` ? Is it a good idea to push that on git?

node_modules is a folder where all the dependencies and dependencies of the dependencies resides.
The node_modules folder can be regenerated so it can be avoided while pushing.

## What is `browserlists`?

It is a package which defines the list of browsers on which the application will work. The developer
can define the list of browsers manualy on which the devleoper wants the application to be working.
For production build :
npx parcel build <entry_point>

## Why react is fast?

It is not only the virtual DOM that makes React faster but other components like bundlers (e.g. parcel, webpack ,vite etc. ) and development ecosystme also.

Parcel Commands :
For development build:
npx parcel <entry_point>
