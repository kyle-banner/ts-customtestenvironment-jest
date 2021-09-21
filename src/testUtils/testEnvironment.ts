const NodeEnvironment = require('jest-environment-node');
import config from 'src/config';

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    await super.setup();
    this.global.someGlobalObject = { key: config };
  }

  async teardown() {
    await super.teardown();
  }
}

module.exports = CustomEnvironment;