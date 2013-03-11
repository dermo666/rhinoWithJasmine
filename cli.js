load('lib/env.rhino.1.2.js');

load('lib/jasmine-1.3.1/jasmine.js');
load('lib/jasmine.console_reporter.js');

// Load spec.
load('spec/example.js');
load('spec/exampleSpec.js');

var jasmineEnv = jasmine.getEnv();

jasmineEnv.updateInterval = 0;
jasmineEnv.addReporter(new jasmine.ConsoleReporter());
jasmineEnv.execute();

