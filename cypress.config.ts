/// <reference types="Cypress" />

import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    BASE_URL: "https://chatguru.com.br/",
    AUTH_PATH: "cypress/fixtures/auth.json",
  },
  e2e: {
    viewportWidth: 414,
    viewportHeight: 896,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        // Example:
        //   async funcao(id) {
        //     const { data } = await axios.get(`https://api.com/${id}`);
        //     return data;
        //   }
      });
    },
  },
});
