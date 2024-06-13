/// <reference types="Cypress" />

import { randowData } from "../../utils/main";

describe("Testing Contact Field", () => {
  it("passes", () => {
    cy.visit(Cypress.env("BASE_URL") + "planos-e-precos/");
    cy.setNumberPhone("83999049099", false);
    cy.get("#step1 > .btn-nav > .btn-primary").click();
    cy.get("#step2 > .mb-5 > strong").should("have.text", "Preencha os dados de contato.");
    cy.setContactInfo("Israel", "Oriente", "israel@gmail.com", "Orientech");
    cy.get("#step2 > .btn-nav > .btn-primary").click();
    cy.get("#step3 > .mb-5 > strong").should("have.text", "Usuários e quantidade de números WhatsApp");
    cy.get("#stepsUsuario2")
      .click()
      .clear()
      .type("{selectall}")
      .type(`${randowData("number", { qtd: 2, min: 1, max: 100 })}`);
  });
});
