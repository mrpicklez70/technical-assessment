export const ProductPage = {
    elements: {
       pnlProductPage: () => cy.get('div.site-content'),//'div[id="page"]'),
       lblProductTitle: () => cy.get('h1.product_title',{timeout:15000}),
       lblPriceAmount: () => cy.get('p[class="price"]').first(),
       ddlQuantity: () => cy.get('input[name="quantity"]'),
       btnAddToCart: () => cy.get('button.single_add_to_cart_button'),
       btnCartIcon: () => cy.get('a[class=cart-contents]'),
       lblMiniCartQuantity: () => cy.get('a.cart-contents').children(1)
    },

    /**
     * Method that interacts with the 'quantity' dropdown list and types in the passed in value
     * @param {string} quantity - Passed in from spec
     */
    increaseQuantity(quantity){
        this.elements.ddlQuantity().clear();
        this.elements.ddlQuantity().type(quantity);
    },

    /**
     * Method that clicks the 'Add to Cart' button.
     */
    clickAddToCartButton(){
        this.elements.btnAddToCart().click();
    },

    /**
     * Method that clicks the 'Cart Icon'.
     * Uses {force:true} to click on the element regardless of its current state. 
     */
    clickCartIcon(){
        this.elements.btnCartIcon().click({force:true});
    }
}