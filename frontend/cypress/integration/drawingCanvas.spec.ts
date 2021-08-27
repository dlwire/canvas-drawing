// blankCanvas.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Drawing on the canvas', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'error').as('consoleError')
        cy.stub(win.console, 'warn').as('consoleWarn')
      }
    });
  });

  afterEach(() => {
    cy.get('@consoleError').should('not.be.called')
    cy.get('@consoleWarn').should('not.be.called')
  });

  it('the canvas should be empty initially', () => {
    cy.get('.pageDiv')
      .snapshot('initial visit');
  });

  it('should draw a line', () => {
    cy.get('[data-cy=theCanvas]')
      .click(42, 41)
      .click(183, 571)
      .matchImageSnapshot('drew_a_line');
  });

  it('should clear the canvas', () => {
    cy.get('[data-cy=theCanvas]')
      .click(42, 41)
      .click(183, 571);

    cy.get('[data-cy=clearButton]')
      .click()

    cy.get('[data-cy=theCanvas]')
      .matchImageSnapshot('clear_the_canvas');
  });
});
