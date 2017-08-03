"# javascriptdevelopmentenvironment" 

Bower became unpopular due to absence of build steps
NPM has buld steps and jspm is other option

retire.js and Node Security Platorm are used to check dependencies vulnerabilities
npm install -g nsp
nsp check
it can be executed from npm stript

for issues in global installations npm is having a video to resolve it

Webservers
http-server inbuilt node server
live-server support live-reloading
express server
budo
webpack dev server
browsersync - dedicated IP for sharing work on LAN

share the work
local machine work as webserver
localtunnel
npm install localtunnel -g
start the app
lt --port 3000
lt --port 3000 --subdomain abc

ngrok
signup
install ngrok
intall authtoken
start the app
./ngrok http 80
password protect access

now
npm install -g now
create start script
now

surge
supports only static files
npm install -g surge
surge

using localtunnel here, provide public url---> https://tkfrmysyah.localtunnel.me

automation
grunt
gulp
npm scripts

npm start -s //to reduce the noise in console

ES1 - 1997
ES2 - 1998
ES3 - 1999
ES5 - 2009
ES6/ES2015 - 2015
ES7/ES2016 - 2016
ES8/ES2017 - 2017

Transpilers
Babel Typescript ELM
Typescript is superset of javascript
ES5<ES6<Typescript

Babel configured in 2 ways .babelrc/package.json 

Module Formats(to avoid global variable)
//past
IIFE(immediately invoked funtion expression)
(function(){//code})();
Asynchronous Module Definition(AMD)
define(['jq'], function(jq){});


CommonJS(CJS)
var jquery = require('jquery');
Universal Module Definition(UMD)
ES6 Modules 
import jquery from 'jquery';

Require.js was first popular bundler
browserify
webpack
bundles morethan js
import css,images,fonts,html etc like js
built in hot-reloading web server

rollup
jspm

webpack doesn't generate any physical output files, it create a bundle in memory and serve it to the browser

bundle.js is not visible physically, visible in netwirks tab it is compiled and transpiled code that Babel and Webpack produced

Soucemap is used for debugging and it downloads the bundled file to read only when developers tool is opened

Linting
JSLint
JSHint - improvement of JSLint
ESLint
TSLint

ESLint doesn't support watch
eslint-loader - linting before every webpack build
eslint-watch - eslint wrapper, not ties to webpack, better warning/error formatting, display clean message, lints test and build scripts
babel-lint is to lint stage0-stage 4 features 4 is finsished less risky

0 off
1 warning
2 error

npm run lint

Testing
unit integration ui

frameworks
mocha without assertion library 
jasmine with assertion library
tape
Qunit
Ava
Jest with assertion library

assertion(chai, should.js, expect)
declare what you expect
expect(2+2).to.equal(4)

helper libraries
JSDOM(test rely on DOM without running browser)
cheerio

Test Runner
Browser(Karma, Testum)
Headless Browser(PhantomJS) - invisible interface
In-memory DOM - JSDOM

JSDOM is asynchronous due to which on changing the text will not fail so need to add done parameter, need to tell mocha it's done

CI server(continuous integration)
Run automated build
Run your tests
check code coverage
automate deployment

Travis-linus based
Appveyor
Jenkins
CircleCI
Semaphore
SnapCI

Open travis ci account
