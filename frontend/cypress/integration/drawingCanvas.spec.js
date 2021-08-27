// blankCanvas.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Drawing on the canvas', () => {
  it('the canvas should be empty initially', () => {
    cy.visit('/');

    cy.get('.pageDiv').snapshot('initial visit');
  });

  it('should draw a line', () => {
    cy.visit('/');

    cy.get('[data-cy=theCanvas]')
      .click(42, 41)
      .click(183, 571)
      .matchImageSnapshot('drew_a_line');
  });

  it('should clear the canvas', () => {
    cy.visit('/');

    cy.get('[data-cy=theCanvas]')
      .click(42, 41)
      .click(183, 571);
    cy.get('[data-cy=clearButton]')
      .click()

    cy.get('[data-cy=theCanvas]')
      .matchImageSnapshot('clear_the_canvas');
  });
});
