export const CartPage = {
    elements: {
        lnkProductName: () => cy.get('td.product-name'),
        lblProductPrice: () => cy.get('td.product-price').first(),
        lblProductQuantity: (quantity) => cy.get(`input[value='${quantity}']`)
    }
}