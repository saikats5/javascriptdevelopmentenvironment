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
