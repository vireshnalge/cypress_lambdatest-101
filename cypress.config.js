const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7g21dx',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
