const Jasmine = require('jasmine');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

const jasmine = new Jasmine();

jasmine.configureDefaultReporter({
  print : ()=>{}
});

//Register custom suite reporter
jasmine.addReporter(new SpecReporter({
  includeStack: true
}));

//load configuration file
jasmine.loadConfigFile('.jasmine.json');

//Jasmine Start
jasmine.execute();
