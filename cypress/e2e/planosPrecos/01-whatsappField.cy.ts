/// <reference types="Cypress" />

describe("Testing Whatsapp Field", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL") + "planos-e-precos/");
  });

  it("Phone Number Example", () => {
    cy.numberPhoneExample();
  });

  it("Short Phone Number", () => {
    cy.setNumberPhone({ numberPhone: "839990490" });
    cy.get("#step1 > .btn-nav > .btn-primary").click();
    cy.get("#countrynumber2").should("have.class", "invalid");
    cy.get(":nth-child(1) > .toast-message").should("have.text", "Número inválido");
  });

  it("Long Phone Number", () => {
    cy.setNumberPhone({ numberPhone: "839990490000000" });
    cy.get("#step1 > .btn-nav > .btn-primary").click();
    cy.get("#countrynumber2").should("have.class", "invalid");
    cy.get(":nth-child(1) > .toast-message").should("have.text", "Muito longo");
  });

  it("Testing Flag", () => {
    const phone = "934996868";
    cy.get(".iti__selected-flag").click();
    cy.get("#iti-0__country-listbox").contains("Portugal").click();
    cy.setNumberPhone({ numberPhone: phone });
    cy.get("#step1 > .btn-nav > .btn-primary").click();
    cy.get("#step2 > .btn-nav > .btn-light").click();
    cy.get("#countrynumber2").should("contain.value", `351${phone}`);
  });
});
