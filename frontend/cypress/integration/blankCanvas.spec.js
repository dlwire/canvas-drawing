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

  it('should log a click to the console', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog')
      }
    });

    cy.get('[data-cy=theCanvas]').click(42, 41);
    cy.get('@consoleLog').should('be.calledWith', {x: 42, y: 42});
  })
});
