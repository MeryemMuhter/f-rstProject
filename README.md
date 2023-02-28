# f-rstProject
The first project 
The Great Courses - Homepage Test
This repository contains automated tests for The Great Courses website.

Setup
To run these tests, I need to have Cypress installed on my visual studio code.
Install Cypress by running npm install cypress in the project directory.
Running the Tests
To run the tests, open a terminal window and navigate to the project directory. Then run the following command:

npx cypress open
This will launch the Cypress Test Runner and run the tests in the homepage.spec.js file.

Test Cases
Add a book to the shopping cart and then remove it successfully
This test case navigates to the Mathematics section of the website, selects the first available book, adds it to the shopping cart, goes to the checkout page, enters an invalid email address, validates the error message, removes the book from the shopping cart, and confirms that the cart is empty.

Notes
The beforeEach hook navigates to the homepage of The Great Courses website before each test.
The cy.on('uncaught:exception') command prevents Cypress from failing the test if it encounters an uncaught exception.
The cy.intercept() command intercepts requests for a third-party script file and aliases them as externalScript.
The cy.viewport() command sets the browser viewport size to 1536x960 pixels to ensure consistent layout across different devices.
The cy.contains() command clicks on the "Browse" button and selects the "Mathematics" category.
The cy.get() command selects various elements on the page, such as checkboxes, radio buttons, and buttons.
The cy.wrap() command allows us to work with individual elements in a collection.
The cy.invoke() command retrieves the value of an attribute on an element.
The cy.should() command makes assertions about the state of an element.
The cy.trigger() command simulates mouse events, such as hover and click.


