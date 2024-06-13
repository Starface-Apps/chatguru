/// <reference types="Cypress" />

describe("Testing Whatsapp Field", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL") + "planos-e-precos/");
  });

  it("passes", () => {
    cy.setNumberPhone("83999049099");
    cy.get("#step1 > .btn-nav > .btn-primary").click();
  });
});
