/**
 * Reusable Test Method for Creating a Product
 * @param {json} headers - JSON object with credentials. Defined in fixtures folder. 
 * @param {json} body - JSON object with product details. Defined in fixtures folder.
 */
Cypress.Commands.add('createProduct', function (headers, body) {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().baseUrl}/wp-json/wc/v3/products`,
        auth: headers,
        body: body
    }).then(response => {
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal(body.name);
        this.productId = response.body.id; // extracts the product id from the response for further use
    });
});

/**
 * Reusable Test Method for Retrieving a Product
 * @param {json} headers - JSON object with credentials. Defined in fixtures folder. 
 * @param {string} productId - Product Id required by Woocommerce API.
 */
Cypress.Commands.add('retrieveProduct', function(headers, productId){
    cy.request({
        method: 'GET',
        url: `${Cypress.config().baseUrl}/wp-json/wc/v3/products/${productId}`,
        auth: headers
    }).its('status').should('equal', 200);
});

/**
 * Reusable Test Method for Deleting a Product
 * @param {json} headers - JSON object with credentials. Defined in fixtures folder. 
 * @param {string} productId - Product Id required by Woocommerce API.
 */
Cypress.Commands.add('deleteProduct', function(headers, productId){
    cy.request({
        method: 'DELETE',
        url: `${Cypress.config().baseUrl}/wp-json/wc/v3/products/${productId}`,
        auth: headers,
        body: {force: true}
    }).its('status').should('equal', 200);
});