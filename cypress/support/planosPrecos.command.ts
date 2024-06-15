/// <reference types="Cypress" />
import { faker } from "@faker-js/faker";
import { getRandomBoolean, randowData } from "../utils/main";

Cypress.Commands.add("setNumberPhone", ({ numberPhone, delay = true }) => {
  const phone = numberPhone ? numberPhone : Cypress.env("PHONE_NUMBER");
  cy.get("#countrynumber2")
    .type(`${phone}`, { delay: delay ? 30 : 0 })
    .then(() => {
      return phone;
    });
});
Cypress.Commands.add("numberPhoneExample", (delay = true) => {
  let phone = "";
  cy.setNumberPhone({ delay }).then((tel: any) => (phone = tel));
  cy.get("#step1 > .btn-nav > .btn-primary").click();
  cy.get("#step2 > .mb-5 > strong")
    .contains("Preencha os dados de contato.")
    .should("be.visible")
    .then(() => {
      return phone;
    });
});

Cypress.Commands.add("setContactInfo", ({ fistName, lastName, email, company, delay = true }) => {
  const contactInfo: contactInfo = {
    fistName: fistName ? fistName : faker.name.firstName(),
    lastName: lastName ? lastName : faker.name.lastName(),
    email: email ? email : faker.internet.email(),
    company: company ? company : faker.company.name(),
  };
  cy.get("#stepsFirstName2").type(contactInfo.fistName, { delay: delay ? 30 : 0 });
  cy.get("#stepsSobreNome2").type(contactInfo.lastName, { delay: delay ? 30 : 0 });
  cy.get("#stepsEmail2").type(contactInfo.email, { delay: delay ? 30 : 0 });
  cy.get("#stepsEmpresa2")
    .type(contactInfo.company, { delay: delay ? 30 : 0 })
    .then(() => {
      return contactInfo;
    });
});
Cypress.Commands.add("contactInfoExample", (delay = true) => {
  let phone: string = "";
  let contactInfo: contactInfo = {};
  cy.numberPhoneExample(false).then((tel: any) => (phone = tel));
  cy.setContactInfo({ delay }).then((contact: any) => (contactInfo = contact));
  cy.get("#step2 > .btn-nav > .btn-primary").click();
  cy.get("#step3 > .mb-5 > strong")
    .contains("Usuários e quantidade de números WhatsApp")
    .should("be.visible")
    .then(() => {
      return { ...contactInfo, phone };
    });
});

Cypress.Commands.add("setUserAndQuantity", ({ qtdUser, moreOneNumber, delay = true }) => {
  const userQuantity = qtdUser ? qtdUser : randowData("number", { qtd: 2, min: 1, max: 99 });
  const wouldLikeMoreNumber = moreOneNumber ? moreOneNumber : getRandomBoolean();
  let formData: object = {};

  cy.contactInfoExample(false).then((form: any) => (formData = form));
  cy.get("#stepsUsuario2")
    .click()
    .type("{selectall}")
    .type(`${userQuantity.toString()}`, { delay: delay ? 30 : 0 });
  if (wouldLikeMoreNumber) cy.get("#maisnumerossim").click();
  else cy.get("#maisnumerosnao").click();
  cy.then(() => {
    return { ...formData, userQuantity, moreOneNumber: wouldLikeMoreNumber };
  });
});
Cypress.Commands.add("UserAndQuantityExample", (delay = true) => {
  let formData: object = {};
  cy.setUserAndQuantity({ delay }).then((form: any) => (formData = form));
  cy.get("#step3 > .btn-nav > .btn-primary").click();
  cy.get("#step4 > .btn-nav > .btn-primary").contains("Finalizar").should("be.visible");
  cy.then(() => {
    return formData;
  });
});
