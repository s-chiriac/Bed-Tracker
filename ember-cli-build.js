'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true
    },
    emberApolloClient: {
      keepGraphqlFileExtension: false
    },
    sassOptions: {
      extension: 'scss'
    },
  });

  return app.toTree();
};
