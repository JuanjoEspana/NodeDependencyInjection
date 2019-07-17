
'use strict';
const IoC = require('./IoC');
const awilix = require('awilix')

var myText = IoC.getContainer().resolve('TestComponent');
console.log(myText.getText());

let Log = class {
  log (text) {
    console.log(text);
  }
}
IoC.getContainer().register({
  log: awilix.asClass(Log)});

const listModules = require('awilix').listModules

const result = listModules(['mockAuthenticators/*.js'])

console.log(result);

result.forEach(function (auth) {
  var authenticator = IoC.getContainer().resolve(auth.name);

  authenticator.authenticate();
});