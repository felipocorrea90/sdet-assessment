class Search {

    // Search/Item Elements
    get firstSearchItem() { return $('//ul[@class="product_list grid row"]/li[1]//div[@class="product-image-container"]') }
    get addToCart() { return $('//div[@class="box-info-product"]//button') }
    get addedToCartMessage() { return $('//h2[contains(.,"Product successfully added to your shopping cart")]') }
    get addCartPopUp() { return $('//button[@name="Submit"]') }
    get popUp() { return $('//iframe[@class="fancybox-iframe"]') }
    get quickViewButton() { return $('//a[@class="quick-view"]') }

    // Methods
    isMyAccountContainerDisplayed() {
        return this.myAccountContainer.isDisplayed()
    }

    addItem() {
        this.firstSearchItem.moveTo()
        this.quickViewButton.click()
        browser.switchToFrame(this.popUp)
        this.addCartPopUp.click()
    }

    isAddedToCartMessageVisible() {
        return this.addedToCartMessage
    }
}

export default new Search()