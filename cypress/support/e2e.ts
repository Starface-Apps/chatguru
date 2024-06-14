import "./planosPrecos.command";

// cypress/support/
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Set the number phone in the form
       * @param {string}
       * @param {boolean} delay - The delay on type()
       * @example cy.setNumberPhone("83999103042")
       */
      setNumberPhone(numberPhone?: numberPhone): Chainable<JQuery<HTMLElement>>;
      /**
       * Set the contact information in the form
       * @param {string} fistName - The first name
       * @param {string} lastName - The last name
       * @param {string} email - The email
       * @param {string} company - The company
       * @param {boolean} delay - The delay on type()
       * @example cy.setContactInfo({ fistName: "Israel", lastName: "Oriente", email: "io@gmail.com", company: "IO" })
       */
      setContactInfo(setContactInfo?: contactInfo): Chainable<JQuery<HTMLElement>>;
      /**
       * Set the user and number phones quantity in the form
       * @param {number} qtdUser - The quantity of user
       * @param {boolean} moreOneNumber - If the user want more than one number
       * @param {boolean} delay - The delay on type()
       * @example cy.setUserAndQuantity({ qtdUser: 10, moreOneNumber: true })
       */
      setUserAndQuantity(userAndQuantity?: userAndQuantity): Chainable<JQuery<HTMLElement>>;

      /**
       * Fill the form with a number phone and assertions.
       * @param delay - The delay on type()
       * @example cy.numberPhoneExample()
       */
      numberPhoneExample(delay?: boolean): Chainable<JQuery<HTMLElement>>;
      /**
       * Fill the form with contact information and assertions.
       * @param delay - The delay on type()
       * @example cy.contactInfoExample()
       */
      contactInfoExample(delay?: boolean): Chainable<JQuery<HTMLElement>>;
      /**
       * Fill the form with user and number phones quantity and assertions.
       * @param delay - The delay on type()
       * @example cy.UserAndQuantityExample()
       */
      UserAndQuantityExample(delay?: boolean): Chainable<JQuery<HTMLElement>>;
    }
  }
}
