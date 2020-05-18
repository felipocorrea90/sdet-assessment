# PAGER SDET Assessment
I choose one of the classic automation testing sites http://automationpractice.com/index.php for this assessment. Is a clothing
online shopping site with plenty of features and options to automate.

The project has the following test automation features:

* create-account

This feature creates a new account with any given personal information provided in the feature file. Make sure to edit the 
Cucumber Data Tables to add your desired values. This scenario won't work with a registered user/email so make sure to change it every time to a non-registered email.
 
* shopping-cart


This feature contains two test scenarios. The first one adds the first item from any given search to the shopping cart making sure the user shopping cart gets updated. The second one modifies the item quantity in the shopping cart summary page, making sure the new total price matches the operation unit price * quantity. 

* sign-in


This feature contains two test scenarios. Making sure that a registered user can sign-in and be redirected to the account page. And that an error message is displayed
when a non-registered user attempts to sign-in. 

* user-exist


This scenario validates that is not possible to create a new account with an already registered user.

## Project Design
**Design Pattern**


This automation project uses the POM (Page Object Model) design pattern drastically improving test maintenance and code duplication, by adding a new layer of abstraction to identify web elements and any operation on those elements. Under this model, each page is a different Page Class.

**BDD**


Cucumber (BDD) was also added to provide easy to read test scenarios by allowing software behavior to be specified in a way any stakeholder can understand. These readable scenarios become live/executable documentation and the baseline for our automated tests. 

**Browser Utils Class**


A Utils class was added to manage browser operations like opening a site. This class can be extended in the future to support multiple browser operations/features like changing the viewport, allow cookies, among others.

**WebDriver**


Webdriverio is a browser and mobile test automation tool for node.js.

**Babel**


To be able to write next-gen JS features, babel is used to compile test files. Adding the proper configuration to babel.config.js and the Cucumber options in the webdriverio runner config file.

**Assertions**


Webdriverio uses Jest matchers as the assertion library.

**Reporting**


This projects uses 3rd party libraries to create a JSON file with the information of the cucumber test execution and then using that JSON to generate a rich HTML report with plenty of easy to read information
about every executed test scenario. Each step has a screenshot and error information in case it fails. This is located at .tmp/report/index.html open this file with any browser (Chrome is recommended)

**Handling Flaky Test**


A few considerations were added to avoid flaky tests. 
- Request retries count was increased.
- The default timeout in milliseconds for the requests was increased.
- The default timeout for all waitFor commands was increased.

## How to run the project

**Prerequisites**

* node version 12.16.3
* npm version 6.14.4

**Installation**


1. Run npm install In case some node_modules are not downloaded properly make sure to install them separately with the command `npm install <module> --save-dev`. I had to install @wdio/cli this way `npm i --save-dev @wdio/cli`
2. Make sure that the feature files have the values you want. Feature files are located in the features folder.
3. Run all tests by using the command `npx wdio wdio.conf.js`

## Why not Cypress
I started this project using Cypress however I quickly realized that Cypress was always giving me problems related to a "cross-origin error on page load"
when a CSS property changed after clicking an element. I tried adding the chromeWebSecurity to false to the `cypress.json` file as suggested by the stack trace but instead of continuing the test or showing an error, a blank page is loaded blocking the test entirely.

It is odd since the domain is the same and the test is not navigating outside the application. I reported this issue to Cypress here https://github.com/cypress-io/cypress/issues/7402

## Additional Notes
The .tmp folder was added consciously to have one rich HTML report with all scenarios executed successfully.  
