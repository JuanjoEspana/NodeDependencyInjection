
'use strict';
const awilix = require('awilix')
const Lifetime = awilix.Lifetime
const container = awilix.createContainer();

let IoC = class IoC {
  getContainer () {
    container.loadModules([
      [
        'models/**/*.js',
        // To have different resolverOptions for specific modules.
        {
          register: awilix.asValue,
          lifetime: Lifetime.SINGLETON
        }
      ],
      'components/**/*.js',
      'mockAuthenticators/**/*.js'
    ],
    {
      // formatName: 'camelCase',
      resolverOptions: {
        lifetime: Lifetime.SINGLETON,
        register: awilix.asClass
      }
    });
    return container;
  }
}

module.exports = new IoC();