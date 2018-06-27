'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/moment/min/moment.min.js');
  //your-bootstrap-app/ember-cli-build.js

  module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
      'ember-bootstrap': {
        importBootstrapCSS: false,
        blacklist: ['bs-popover', 'bs-accordion'],
        'bootstrapVersion': 4,
        'importBootstrapFont': false
      }
    });

    return app.toTree();
  };
  return app.toTree();
};
