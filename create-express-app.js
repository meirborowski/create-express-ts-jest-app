#!/usr/bin/env node

const execa = require("execa");

async function createExpressApp() {
  const projectName = process.argv[2];
  if (!projectName) {
    console.error("Please provide a project name.");
    return;
  }

  try {
    // Clone your project template from a Git repository
    await execa("git", [
      "clone",
      "https://github.com/meirborowski/create-express-ts-jest-app.git",
      projectName,
    ]);

    // Change the directory to the newly created project
    process.chdir(projectName);

    // Install dependencies and perform other setup tasks
    await execa("npm", ["install"]);

    console.log(`Created ${projectName} successfully.`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

createExpressApp();
