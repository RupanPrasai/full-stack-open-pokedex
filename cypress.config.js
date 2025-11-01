const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'test/e2e/cypress/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})
