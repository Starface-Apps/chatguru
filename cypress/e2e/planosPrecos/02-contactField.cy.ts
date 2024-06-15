/// <reference types="Cypress" />

describe("Testing Contact Field", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL") + "planos-e-precos/");
  });

  it("Contact Info Example", () => {
    cy.contactInfoExample();
  });

  it("Invalid First Name", () => {
    cy.numberPhoneExample(false);
    cy.setContactInfo({
      fistName: " ",
    });
    cy.get("#step2 > .btn-nav > .btn-primary").click();
    cy.get("#stepsFirstName2").should("have.class", "invalid");
    cy.get(".toast-message").should("have.text", "Preencha o campo Primeiro nome antes de prosseguir");
  });

  it("Invalid Last Name", () => {
    cy.numberPhoneExample(false);
    cy.setContactInfo({
      lastName: " ",
    });
    cy.get("#step2 > .btn-nav > .btn-primary").click();
    cy.get("#stepsSobreNome2").should("have.class", "invalid");
    cy.get(".toast-message").should("have.text", "Preencha o campo Sobrenome antes de prosseguir");
  });

  it("Invalid Email", () => {
    cy.numberPhoneExample(false);
    cy.setContactInfo({
      email: "Test",
    });
    cy.get("#step2 > .btn-nav > .btn-primary").click();
    cy.get("#stepsEmail2").should("have.class", "invalid");
    cy.get(".toast-message").should(
      "have.text",
      "Preencha um endereço de e-mail válido no campo E-mail antes de prosseguir"
    );
  });

  it("Invalid Company", () => {
    cy.numberPhoneExample(false);
    cy.setContactInfo({
      company: " ",
    });
    cy.get("#step2 > .btn-nav > .btn-primary").click();
    cy.get("#stepsEmpresa2").should("have.class", "invalid");
    cy.get(".toast-message").should("have.text", "Preencha o campo Empresa antes de prosseguir");
  });
});
