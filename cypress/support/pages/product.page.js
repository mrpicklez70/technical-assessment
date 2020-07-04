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
    increaseQuantity(quantity){
        this.elements.ddlQuantity().clear();
        this.elements.ddlQuantity().type(quantity);
    },
    clickAddToCartButton(){
        this.elements.btnAddToCart().click();
    },
    clickCartIcon(){
        this.elements.btnCartIcon().click();
    }
}