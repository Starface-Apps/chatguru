/// <reference types="Cypress" />

describe("Testing User And Quantity", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL") + "planos-e-precos/");
  });

  it("User And Quantity Example", () => {
    cy.UserAndQuantityExample();
  });
});
