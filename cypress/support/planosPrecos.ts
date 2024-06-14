/// <reference types="Cypress" />

Cypress.Commands.add("setNumberPhone", (number: string, delay = true) => {
  cy.get("#countrynumber2").type(`${number}`, { delay: delay ? 30 : 0 });
});

Cypress.Commands.add("setContactInfo", (fistName, lastName, email, company, delay = true) => {
  cy.get("#stepsFirstName2").type(fistName, { delay: delay ? 30 : 0 });
  cy.get("#stepsSobreNome2").type(lastName, { delay: delay ? 30 : 0 });
  cy.get("#stepsEmail2").type(email, { delay: delay ? 30 : 0 });
  cy.get("#stepsEmpresa2").type(company, { delay: delay ? 30 : 0 });
});
