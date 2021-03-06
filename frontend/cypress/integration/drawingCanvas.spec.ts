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

    cy.get('[data-cy=clearButton]')
      .click();
  });

  it('the canvas should be empty initially', () => {
    cy.get('.pageDiv')
      .snapshot('initial visit')
      .matchImageSnapshot('initial_visit');
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
      .click();

    cy.get('[data-cy=theCanvas]')
      .matchImageSnapshot('clear_the_canvas');
  });

  it('should persist the shapes through refresh', () => {
    cy.get('[data-cy=theCanvas]')
      .click(42, 41)
      .click(183, 571)
      .matchImageSnapshot('drew_a_line');

    cy.reload();

    cy.get('[data-cy=theCanvas]')
      .matchImageSnapshot('drew_a_line');
  });

  it('should allow switching drawing types', () => {
    cy.get('[data-cy=rectangleButton]')
      .click()
      .snapshot('rectangle selected');

    cy.get('[data-cy=lineButton]')
      .click()
      .snapshot('line selected');
  });

  it('should draw rectangles and lines', () => {
    cy.get('[data-cy=rectangleButton]')
      .click();

    cy.get('[data-cy=theCanvas]')
      .click(80, 60)
      .click(720, 540);

    cy.get('[data-cy=lineButton]')
      .click();

    cy.get('[data-cy=theCanvas]')
      .click(0, 0)
      .click(800, 600)
      .matchImageSnapshot('rectangle_and_line');

    cy.reload();

    cy.get('[data-cy=theCanvas]')
      .matchImageSnapshot('rectangle_and_line');
  });
});
