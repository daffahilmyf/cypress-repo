describe('template spec', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('Verify that uncheck functionality is working correctly', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get(':nth-child(2) > div > [data-cy="complete"]')
      .should('exist')
      .and('be.visible')
      .click();
    cy.get('[data-cy="redo"]')
      .should('exist')
      .and('be.visible')
      .click();
    /* ==== End Cypress Studio ==== */
  });
})

/* ==== Test Created with Cypress Studio ==== */
it('Verify first list is checked', function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/');
  cy.get(':nth-child(1) > div > [data-cy="complete"]')
    .should('exist')
    .click();
  /* ==== End Cypress Studio ==== */
});