import "./planosPrecos";

// cypress/support/
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Set the contact information in the form
       * @param {string} fistName - The first name
       * @param {string} lastName - The last name
       * @param {string} email - The email
       * @param {string} company - The company
       * @param {boolean} delay - The delay on type()
       * @example cy.setContactInfo("Israel", "Oriente", "israel@gmail.pt", "Orientech")
       */
      setContactInfo(
        fistName: string,
        lastName: string,
        email: string,
        company: string,
        delay?: boolean
      ): Chainable<JQuery<HTMLElement>>;
      /**
       * Set the number phone in the form
       * @param {string}
       * @param {boolean} delay - The delay on type()
       * @example cy.setNumberPhone("83999103042")
       */
      setNumberPhone(numberPhone: string, delay?: boolean): Chainable<JQuery<HTMLElement>>;
    }
  }
}
