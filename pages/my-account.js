class MyAccount {

    // Elements
    get myAccountContainer() { return $('#my-account') }

    // Methods
    isMyAccountContainerDisplayed() {
        return this.myAccountContainer.isDisplayed()
    }
}

export default new MyAccount()