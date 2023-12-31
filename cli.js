#!/usr/bin/env node

const { execSync } = require("child_process");

const args = process.argv.slice(2);

// Construct the command to execute your application's main file (e.g., index.js)
const command = `node ${__dirname}/dist/index.js ${args.join(" ")}`;

try {
  execSync(command, { stdio: "inherit" });
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
