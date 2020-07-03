/**
 * Reusable Test Method for Authenticating
 * @param {json} credentials - JSON object with credentials. Defined in fixtures folder. 
 */
Cypress.Commands.add('authenticate', function (credentials) {
    cy.request('POST', 'http://34.205.174.166', credentials).its('status').should('equal', 200);
});