import { ProductPage } from '../support/pages/product.page'
import { CartPage } from '../support/pages/cart.page';

context('Technical Assessment Test', function () {
    before(function () {
        cy.fixture('/user-credentials').as('credentials'); // Using aliases when calling importing fixtures allows us to asign them to the 'this' context
        cy.fixture('/product-details').as('productDetails');
        this.quantity = 7;
    });

    describe('Create Product Functionality', function () {

        it('Should add a product with success', function () {
            cy.createProduct(this.credentials, this.productDetails);
        });

        it('Should navigate to product page', function () {
            cy.visit(`/product/${this.productDetails.name}`);
            ProductPage.elements.pnlProductPage().should('be.visible');
            ProductPage.elements.lblProductTitle().should('be.visible').and('contain', this.productDetails.name);
            ProductPage.elements.lblPriceAmount().should('be.visible');
        });

        it('Should increase the product quantity to 7', function () {
            ProductPage.increaseQuantity(this.quantity);
            ProductPage.clickAddToCartButton();
            ProductPage.elements.lblMiniCartQuantity().should('be.visible').and('contain', this.quantity);
            ProductPage.clickCartIcon();
        });

        it('Should go to the cart page', function () {
            cy.url().should('include', `${Cypress.config().baseUrl}/cart`);
            CartPage.elements.lnkProductName().should('be.visible').and('contain', this.productDetails.name);
            CartPage.elements.lblProductQuantity(this.quantity).should('be.visible');
            CartPage.elements.lblProductPrice().should('be.visible').and('contain', this.productDetails.regular_price);
        });
        
        it('Retrieves the product', function(){
            cy.retrieveProduct(this.credentials, this.productId);
        });

        it('Deletes the product', function(){
            cy.deleteProduct(this.credentials, this.productId);
        });
    });
});