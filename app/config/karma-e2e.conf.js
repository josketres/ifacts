module.exports = function(config) {
  config.set({
    basePath: '../',

    files: [
      'test/e2e/**/*.js'
    ],

    frameworks: ['ng-scenario'],

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true,

    proxies: {
      '/': 'http://localhost:8000/'
    },

    urlRoot: '/test',

    junitReporter: {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    }
  });
};