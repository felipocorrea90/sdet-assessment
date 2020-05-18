import { Given, When, Then, After, Before } from "cucumber"

// Import Page Objects
import SingIn from "../../pages/sign-in"
import Utils from "../../utils/driver-utils"
import Homepage from "../../pages/homepage"
import MyAccount from "../../pages/my-account"
import Shopping from "../../pages/search"
import Cart from "../../pages/cart"

Given('user visits the shopping sign in website', function() {
    Utils.openSite("http://automationpractice.com/index.php?controller=authentication&back=my-account");
})

Given('user visits the shopping website', function() {
    Utils.openSite("http://automationpractice.com/index.php");
})

When('the user clicks the Create an Account CTA with email {string} specified', function(email) {
    Homepage.clickSignIn()
    SingIn.createAccount(email)
})

When('adds all the mandatory personal information', function(table) {
    const data = table.rowsHash()
    SingIn.addPersonalInfo(data['Gender'], data['First Name'], data['Last Name'], data['Password'], data['DOB'])
})

When('adds all the address information', function(table) {
    const data = table.rowsHash()
    SingIn.addAddressInfo(data['First Name'], data['Last Name'], data['Address'], data['City'], data['State'], data['Zip Code'], data['Country'], data['Mobile Number'])
});

When('clicks the create account button at the end of the form', function() {
    SingIn.clickRegister()
})


When('user signs in using credentials', function(table) {
    const data = table.rowsHash()
    SingIn.registeredUserSignIn(data['Email'], data['Password'])
})

When('user searches for {string}', function(itemName) {
    Homepage.searchItem(itemName)
})

When('adds first item to shopping cart', { wrapperOptions: { retry: 3 } }, function() {
    Shopping.addItem()
})

When('goes to the Cart page', function() {
    Homepage.goToCartWithOverlay()
})

When('changes item {string} quantity to {int}', function(itemName, qty) {
    Cart.changeCartQty(itemName, qty)
})

Then('shopping cart should be updated', function() {
    expect(Shopping.isAddedToCartMessageVisible()).toBeTruthy()
})

Then('user should be redirected to the My Account page', function() {
    expect(MyAccount.isMyAccountContainerDisplayed()).toBeTruthy()
})

Then('Authentication failed message should be displayed', function() {
    expect(SingIn.isAuthFailedMessageDisplayed()).toBeTruthy()
})

Then('item quantity for {string} should be {int} and total price should match', function(itemName, qty) {
    expect(Cart.getUnitPrice(itemName) * qty).toEqual(Cart.getTotalPrice(itemName))
})

Then('user menu should be displayed with customer name {string}', function(customerName) {
    expect(Cart.getUserMenu()).toEqual(customerName)
})

Then('message that account is registered should be displayed', function() {
    expect(SingIn.accountExistMessage).toBeTruthy()
})

After((scenario) => {
    browser.reloadSession()
});


