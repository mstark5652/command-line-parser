#! /usr/bin/env node

var processCommand = require('./');

processCommand(
  process.argv, // arguments
  process.cwd(), // current working directory
);
