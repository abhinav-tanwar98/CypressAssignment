import HomePage from "../pages/HomePage";

describe("Home page test",function(){
    
    const homePage = new HomePage()

    beforeEach("Visiting the url",function(){
        homePage.visitHomePage()    
    })
    it("Verify if Logo is present",function(){
        
        homePage.verifyLogo()
    })
    it("verfiy count of total featured products",function(){

        homePage.countOftotalFeaturedProducts(8)
    })
})