const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7t4tr4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

