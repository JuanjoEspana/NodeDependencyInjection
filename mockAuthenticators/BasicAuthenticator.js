
const IoC = require('../IoC');

let BasicAuthenticator = class BasicAuthenticator {
  authenticate (request) {
    console.log('basic authenticator');
    var log = IoC.getContainer().resolve('log');
    log.log('This is my logggggggggggg');
  }
}

exports = module.exports = BasicAuthenticator;