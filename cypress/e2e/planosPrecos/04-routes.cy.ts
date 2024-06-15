/// <reference types="Cypress" />

describe("Testing Routes Buttons", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL") + "planos-e-precos/");
  });

  it("Prev button router", () => {
    cy.UserAndQuantityExample(false);
    cy.get("#step4 > .btn-nav > .btn-light").click();
    cy.get("#step3 > .mb-5 > strong").contains("Usuários e quantidade de números WhatsApp").should("be.visible");
    cy.get("#step3 > .btn-nav > .btn-light").click();
    cy.get("#step2 > .mb-5 > strong").contains("Preencha os dados de contato.").should("be.visible");
    cy.get("#step2 > .btn-nav > .btn-light").click();
    cy.get("#step1 > .mb-5 > strong")
      .contains("Preencha os dados e receba uma proposta no seu Whatsapp.")
      .should("be.visible");
  });
});
