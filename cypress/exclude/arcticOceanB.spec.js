describe('Wikipedia', function () {
  it('Arctic Ocean ', function () {
    cy.visit('/');
    cy.get('#simpleSearch').type('Arctic Ocean');
    cy.get('.suggestions-result').first().click();
    cy.scrollTo(0, 1200);
    cy.contains('polar bears');
  });
});
