export const ProductPage = {
    elements: {
       pnlProductPage: () => cy.get('div.site-content'),//'div[id="page"]'),
       lblProductTitle: () => cy.get('div[class="summary"]').find('h1'),
       lblPriceAmount: () => cy.get('p[class="price"]').first(),
       ddlQuantity: () => cy.get('input[name="quantity"]'),
       btnAddToCart: () => cy.get('button[class="single_add_to_cart_button"]'),
       btnCartIcon: () => cy.get('a.cart-contents::after'),
       lblMiniCartQuantity: () => cy.get('span.quantity')
    },
    increaseQuantity(quantity){
        this.elements.ddlQuantity().clear();
        this.elements.ddlQuantity().type(quantity);
    },
    clickAddToCartButton(){
        this.elements.btnAddToCart().click({force:true});
    },
    triggerMiniCart(){
        this.elements.btnCartIcon().trigger('mouseover');
        return this.elements.lblMiniCartQuantity();
    }
}