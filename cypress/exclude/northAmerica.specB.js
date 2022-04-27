describe('Wikipedia', function () {
  it('North America contains Canada', function () {
    cy.visit('/');
    cy.get('#simpleSearch').type('North America');
    cy.get('.suggestions-result').first().click();
    cy.contains('Canada');
  });

  it(
    'North America contains Germany',
    {
      retries: 2,
    },
    function () {
      cy.visit('/');
      cy.get('#simpleSearch').type('North America');
      cy.get('.suggestions-result').first().click();
      cy.contains('Germany');
    }
  );
  xit('skip', function () {
      cy.visit('/');
      cy.get('#simpleSearch').type('North America');
      cy.get('.suggestions-result').first().click();
      cy.contains('Germany');
 });
});
