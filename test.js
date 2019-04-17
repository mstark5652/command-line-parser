
var parseArgs = require("./");

var options = parseArgs();

console.log("You passed in options: " + JSON.stringify(options, null, 2));

console.log("\nRunning other test:");

var debug = parseArgs(["node", "index.js", "--debug"]).debug;
var debugFlag = parseArgs(["node", "index.js", "-d"]).flags.includes("d");
var debugAttr = parseArgs(["node", "index.js", "debug"]).attrs.includes("debug");
console.log(`All three debug args true: \n:: prop: ${debug} \n:: flag: ${debugFlag} \n:: attr: ${debugAttr}`);
