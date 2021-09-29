const NodeEnvironment = require('jest-environment-node');
// @ts-ignore
import serverConfig from 'test-proj/serverConfig';

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    await super.setup();
    this.global.someGlobalObject = serverConfig;
  }

  async teardown() {
    await super.teardown();
  }
}

module.exports = CustomEnvironment;