"use strict";

class TestPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.provider = this.serverless.getProvider("aws");
    this.region = this.provider.getRegion();
    this.hooks = {
      "before:package:createDeploymentArtifacts": this.test.bind(this)
    };
  }

  test() {
    console.log(this.serverless.service.custom.conf);
  }
}

module.exports = TestPlugin;

