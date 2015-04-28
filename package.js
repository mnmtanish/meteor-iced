Package.describe({
  name: 'mnmtanish:iced',
  summary: "Iced Coffee Script compiler and runtime for Meteor",
  git: 'https://github.com/mnmtanish/meteor-iced.git',
  version: "1.1.0",
});

Package._transitional_registerBuildPlugin({
  name: "compileIcedCoffeescript",
  use: [],
  sources: ['plugin/compile-iced.js'],
  npmDependencies: {"iced-coffee-script": "1.8.0-d", "source-map": "0.1.32"}
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('lib/iced-coffee-script-1.8.0-d.js');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers', 'mnmtanish:iced']);
  api.addFiles('tests/coffee.iced');
});
