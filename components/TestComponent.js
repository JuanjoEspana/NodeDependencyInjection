
const IoC = require('../IoC');

class TestComponent {
  getText () {
    return 'Test text: ' + IoC.getContainer().resolve('CalcComponent').getCalc();
  }
}

exports = module.exports = TestComponent;