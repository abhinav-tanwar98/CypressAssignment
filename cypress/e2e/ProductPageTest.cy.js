import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

 describe("Product page test",function(){
    
    const homePage = new HomePage()
    const productPage = new ProductPage()

    beforeEach("Navigating to product page",function(){
        homePage.visitHomePage()
        homePage.navigateToProductPage()
        cy.fixture('example').then(function(data){
            this.data = data;
        })   
    })
    it("Verify navigation to product page",function(){
        productPage.verifyPageTitle()
    })
    it("verfiy count of total searched products",function(){

        cy.intercept('GET','/example/**',this.data)
        productPage.searchForProduct(this.data.productNameInSearchList)
        productPage.countOftotalSearchedProducts(5)
    })
    it("verify name of searched item",function(){
        cy.intercept('GET','/example/**',this.data)
        productPage.searchForProduct(this.data.productNameInSearchList)
        productPage.clickingItemFromSearchList(1)
        productPage.verifySearchedItemName(this.data.searchedItemName)

    })
 })