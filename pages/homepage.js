class Homepage {

    // Homepage Elements
    get signInButton() { return $('//a[@class="login"]') }
    get searchBar() { return $('#search_query_top') }
    get searchButton() { return $('//button[@name="submit_search"]') }
    get cartOverlay() { return $('//div[@class="layer_cart_overlay"]') }
    get cartButton() { return $('//a[@title="View my shopping cart"]') }
    get crossButton() { return $('//span[@class="cross"]') }

    // Methods
    clickSignIn() {
        this.signInButton.click()
    }

    searchItem(itemName) {
        this.searchBar.setValue(itemName)
        this.searchButton.click()
    }

    goToCartWithOverlay() {
        this.crossButton.click()
        browser.switchToParentFrame()
        this.cartButton.click()
    }
}

export default new Homepage()