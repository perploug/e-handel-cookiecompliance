// import the runner
const wecTestRunner = require("wecrunner");

// import the needed reporters (or write your own)
const htmlReporter = require("wecrunner/reporter/html/");

async function run() {
  // specify where the output of the collected data and reports would be placed
  const wtr = new wecTestRunner({ output: __dirname + "/output" });

  // alternative way, load all .js files in ./tests
  wtr.addTestSuite(__dirname + "/tests");

  // collect evidence with WEC
  await wtr.collect();

  // Execute all tests against the collected evidence
  await wtr.test();

  // Generates a html view for manual review, sending by email, etc.
  wtr.addReporter(new htmlReporter());

  await wtr.report();
}

// execute the whole thing
run();
