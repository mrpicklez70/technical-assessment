import { ProductPage } from '../support/pages/product.page'
context('Technical Assessment Test', function () {
    before(function () {
        cy.fixture('/user-credentials').as('credentials'); // Using aliases when calling importing fixtures allows us to asign them to the 'this' context
        cy.fixture('/product-details').as('productDetails');
    });

    describe('Create Product Functionality', function () {
        
        it('Should add a product with success', function () {
            cy.request({
                method: 'POST',
                url: `${Cypress.config().baseUrl}/wp-json/wc/v3/products`,
                auth: this.credentials,
                body: this.productDetails
            }).then(response => {
                expect(response.status).to.equal(201);
                expect(response.body.name).to.equal(this.productDetails.name);
            });
        });

        it('Should navigate to product page', function () {
            cy.visit(`/product/${this.productDetails.name}`);
            ProductPage.elements.pnlProductPage().should('be.visible');
            ProductPage.elements.lblProductTitle().should('be.visible').and('contain', this.productDetails.name);
            ProductPage.elements.lblPriceAmount().should('be.visible');
        });

        it('Should increase the product quantity to 7', function () {
            let quantity = 7;
            ProductPage.increaseQuantity(quantity);
            ProductPage.clickAddToCartButton();
            ProductPage.elements.lblMiniCartQuantity().should('be.visible').and('contain', quantity);
        });

        it('Should click on the cart icon', function(){
            ProductPage.clickCartIcon();
            cy.url().should('include', `${Cypress.config().baseUrl}/cart`)
        })
    });
});