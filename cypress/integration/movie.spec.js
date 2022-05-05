describe('Movie App', () => {
  it('frontPage can be opened', () => {
    cy.visit('http://localhost:3000/search');
    cy.contains('FIND YOUR MOViE');
  });
});
