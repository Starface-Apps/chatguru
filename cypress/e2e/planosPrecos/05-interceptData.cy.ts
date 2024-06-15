/// <reference types="Cypress" />

import { parseMultipartFormData } from "../../utils/main";

describe("Network Interception", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL") + "planos-e-precos/");
  });

  it("Compare Data Form With HTTP Request", () => {
    cy.UserAndQuantityExample(false).then((formData: any) => {
      cy.intercept("https://hook.us1.make.com/*").as("interceptData");
      cy.get("#step4 > .btn-nav > .btn-primary").click();
      cy.wait("@interceptData").then(({ request }) => {
        const jsonResult: any = parseMultipartFormData(request.body);
        expect(jsonResult.countrynumber2).to.be.equal(`55${formData.phone}`);
        expect(jsonResult.stepsFirstName2).to.be.equal(formData.fistName);
        expect(jsonResult.stepsSobreNome2).to.be.equal(formData.lastName);
        expect(jsonResult.stepsEmail2).to.be.equal(formData.email);
        expect(jsonResult.stepsEmpresa2).to.be.equal(formData.company);
        expect(jsonResult.stepsUsuario2).to.be.equal(formData.userQuantity);
        expect(jsonResult.maisnumeros).to.be.equal(formData.moreOneNumber ? "SIM" : "NAO");
      });
    });
  });
});
