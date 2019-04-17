## Overview
Utility to parser command line arguments in a simple but effective way. This module has no external dependencies and was build to be straight forward with no extra frills.

## Install
Using Intouch's npm registry
`npm install --save @its/cli-parser`

## Types of Arguments
* values - `node index.js --srcDir="./src/"` argument with label that provides a value to be passed through
* boolean - `node index.js --debug` argument parameters but provides to value (If excluded value is false/undefined. If passed in argv, then value is true.)
* flags - `node index.js -a -bc` a,b,c would all be considered flags (single letter and single hypen)
* attributes - `node index.js release` 'release' would be considered an attribute in this case. I like to think of them as commands. (multiple can be passed)

## Usage
```js
var parseArgs = require("@its/cli-parser");
var args = parseArgs(process.argv);
console.log(args);
```
```bash
{
    srcDir: "./src/",
    debug: true,
    attrs: [
        "release"
    ],
    flags: [
        "a",
        "b"
    ]
}
```

## Examples
* `node .\test.js --debug release -ab -a -edc`
```js
var options = parseArgs();
console.log(options);
{
  "executor": "C:\\Program Files\\nodejs\\node.exe",
  "script": "C:\\Users\\michael.stark\\dev\\its-cli-parser\\test.js",
  "flags": [
    "a",
    "b",
    "e",
    "d",
    "c"
  ],
  "attrs": [
    "release"
  ],
  "debug": true
}
```
  
### Copyright 2019. Intouch Solutions. All Rights Reserved.