class SignIn {

    // Initial Create Account Elements - Using Xpath
    get emailCreateField() { return $('//input[@id="email_create"]') }
    get submitCreateButton() { return $('//button[@id="SubmitCreate"]') }

    // Personal Info Elements - Using XPath
    get maleGender() { return $('//input[@id="id_gender1"]') }
    get femaleGender() { return $('/input*[@id="id_gender2"]') }
    get customerFirstName() { return $('//input[@id="customer_firstname"]') }
    get customerLastName() { return $('//*[@id="customer_lastname"]') }
    get passwordField() { return $('//*[@id="passwd"]') }
    get days() { return $('#days') }
    get months() { return $('#months') }
    get years() { return $('#years') }

    // Address Info Elements - Using CSS
    get addressFirstName() { return $('#firstname') }
    get addressLastName() { return $('#firstname') }
    get addressField() { return $('#address1') }
    get cityField() { return $('#city') }
    get stateField() { return $('#id_state') }
    get zipCodeField() { return $('#postcode') }
    get countryField() { return $('#id_country') }
    get mobilePhoneField() { return $('#phone_mobile') }
    get registerButton() { return $('#submitAccount') }

    // Sign In Elements - Using CSS
    get registeredEmail() { return $('#email') }
    get registeredPwd() { return $('#passwd') }
    get signInButton() { return $('#SubmitLogin') }

    // Error Elements - Using Xpath
    get authFailedMessage() { return $('//div[@class="alert alert-danger"]//li[contains(.,"Authentication failed")]') }
    get accountExistMessage() { return $('#create_account_error') }

    // Methods
    createAccount(email) {
        this.emailCreateField.setValue(email)
        this.submitCreateButton.click()
    }

    addPersonalInfo(gender, firstName, lastName, pwd, dob) {
        if (gender == "Male") {
            this.maleGender.click()
        } else if (gender == "Female") {
            this.femaleGender.click()
        }
        this.customerFirstName.setValue(firstName)
        this.customerLastName.setValue(lastName)
        this.passwordField.setValue(pwd)
        this.years.selectByAttribute("value",dob.substring(0,4))
        // Make sure to remove 0 from DD format
        if (dob.substring(5,6) == 0) {
            this.days.selectByAttribute("value",dob.substring(6,7))
        } else {
            this.days.selectByAttribute("value",dob.substring(5,7))
        }
        // Make sure to remove 0 from MM format
        if (dob.substring(8,9) == 0) {
            this.months.selectByAttribute("value",dob.substring(9,10))
        } else {
            this.months.selectByAttribute("value",dob.substring(8,10))
        }
    }

    addAddressInfo(firstName, lastName, address, city, state, zipCode, country, mobileNumber) {
        this.addressFirstName.setValue(firstName)
        this.addressLastName.setValue(lastName)
        this.addressField.setValue(address)
        this.cityField.setValue(city)
        this.stateField.selectByVisibleText(state)
        this.zipCodeField.setValue(zipCode)
        this.countryField.selectByVisibleText(country)
        this.mobilePhoneField.setValue(mobileNumber)
    }

    clickRegister() {
        this.registerButton.click()
    }

    registeredUserSignIn(email, pwd) {
        this.registeredEmail.setValue(email)
        this.registeredPwd.setValue(pwd)
        this.signInButton.click()
    }

    isAuthFailedMessageDisplayed() {
        return this.authFailedMessage.isDisplayed()
    }

    AccountExist() {
        return this.accountExistMessage.isDisplayed()
    }


}

export default new SignIn()