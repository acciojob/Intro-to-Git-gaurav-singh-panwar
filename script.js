//your JS code here. If required.
() => {
  cy.visit(baseUrl + "/main.html");
  cy.get('p').should('have.text', "My intro to Git and colab");
}