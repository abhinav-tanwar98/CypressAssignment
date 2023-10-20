class CartPage{
    pageTitleWhenCartIsNotEmpty = ".title.title--primary"
    pageTitleWhenCartIsEmpty = ".cart__empty-text"

    verifyPageTitleWhenCartIsNotEmpty(){
        cy.get(this.pageTitleWhenCartIsNotEmpty).should('be.visible')
    }

    verifyPageTitleWhenCartIsEmpty(){
        cy.get(this.pageTitleWhenCartIsEmpty).should('be.visible')
    }
}
export default CartPage;