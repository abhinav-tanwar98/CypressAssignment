class ProductPage{
    pageTitle = ".collection-hero__title"
    searchButton = "summary[aria-label='Search']"
    searchBar = "#Search-In-Modal"
    totalSearchedItems = "#predictive-search-results-list>li"
    itemFromSearchedList = "#predictive-search-results-list>li:nth-child("
    searchedItemName = "div[class='product__title'] h1"
    addToCartButton = "button[name='add']"
    viewMyCartPopUp = "#cart-notification-button"

    verifyPageTitle(){
        cy.get(this.pageTitle).should('be.visible')
    }

    searchForProduct(product){
        cy.get(this.searchButton).click()
        cy.get(this.searchBar).type(product)
    }

    countOftotalSearchedProducts(count){
        cy.get(this.totalSearchedItems).should('have.length',count)
    }

    clickingItemFromSearchList(position){
        cy.get(this.itemFromSearchedList+position+")").click()
    }
    
    verifySearchedItemName(name){
        cy.get(this.searchedItemName).contains(name)
    }

    addItemToCart(){
        cy.get(this.addToCartButton).click()
    }

    clickingOnViewMyCartPopUP(){
        cy.get(this.viewMyCartPopUp).click()
    }
}
export default ProductPage;