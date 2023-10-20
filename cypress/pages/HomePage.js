///<reference types="cypress"/>

class HomePage{
    
    logoimage = "img.header__heading-logo"
    url = "https://testvagrant.myshopify.com/"
    totalFeaturedProducts = "#Slider-template--16876710920493__featured_collection>li"
    catalogButton = "nav:nth-child(3) > ul:nth-child(1) > li:nth-child(2)"
    cartIcon = "#cart-icon-bubble"

    visitHomePage(){
        cy.visit(this.url)
    }

    verifyLogo(){
        cy.get(this.logoimage).should('be.visible')
    }
    countOftotalFeaturedProducts(count){
        cy.get(this.totalFeaturedProducts).should('have.length',count)
    }
    navigateToProductPage(){
        cy.get(this.catalogButton).click()
    }
    navigateToCartPAge(){
        cy.get(this.cartIcon).click()
    }
}
export default HomePage;