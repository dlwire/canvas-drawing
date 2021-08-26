// blankCanvas.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('On the initial visit', () => {
  it('The canvas should be empty', () => {
    cy.visit('/');

    cy.get('.pageDiv').snapshot('initial visit');
  });
});
