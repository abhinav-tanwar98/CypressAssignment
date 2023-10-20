import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

describe("Cart page test",function(){

    const homePage = new HomePage()
    const productPage = new ProductPage()
    const cartPage = new CartPage()

    beforeEach("Navigating to product page",function(){
        homePage.visitHomePage()
        cy.fixture('example').then(function(data){
            this.data = data;
        })   
    })

    it("Verify Cart Page Title when cart is empty",function(){
        homePage.navigateToCartPAge()
        cartPage.verifyPageTitleWhenCartIsEmpty()
    })

    it("verify cart page title when there is a item in cart",function(){
        homePage.navigateToProductPage()
        productPage.searchForProduct(this.data.productNameInSearchList)
        productPage.clickingItemFromSearchList(1)
        productPage.addItemToCart()
        productPage.clickingOnViewMyCartPopUP()
        cartPage.verifyPageTitleWhenCartIsNotEmpty()
    })
})