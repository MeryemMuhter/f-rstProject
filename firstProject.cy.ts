describe('homepage', () => {
    beforeEach('go to homepage', () => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.intercept('GET','**/some-3rd-party-script.js*').as('externalScript'),
      cy.visit('https://www.thegreatcourses.com/')
      cy.viewport(1536,960)
    })
   
    it('Add a book to the shopping cart and then remove it successfully',()=>{
       
        cy.contains('Browse').click()// click Browse to expand the dropdown
        cy.contains('Mathematics').click(); // Click the Mathematics
      cy.get('.sales > .custom-checkbox > .custom-control-label').click() // Click the checkbox
      cy.get('img[class*="card-img-top" i]').each(($img, index) => {
        cy.wrap($img).invoke('attr', 'alt').then(name => {
          console.log(name)
          // click the first book
          if (index === 0) {
            cy.wrap($img).click()  
            cy.get('#course-format-dvd-PD40030').check({ force: true }) // Find the DVD option radio button and click it
            cy.contains('Add to Cart').click() // add to the Cart
            cy.contains('added to your cart').should('be.visible') // validate the book was added to the cart.
            cy.contains('View Cart').click() // click view cart
            cy.get('.CartItem-Heading').first().should('contain', name) // Validate first item in cart
            cy.get('a[elem="CheckoutButton"]').click()   // click the checkout button
            cy.get('#email').type('test123@1secmail.com')
            cy.get('#password').type('test123')
            cy.get('.AccountStep >.ValidatedInputs').submit() //click the continue button
            cy.get('#emailError').should('contain',`We can't find an account with that email address`)//validate the error message
            cy.go('back')  // navigate back
            cy.get('#RemoveItem').click() //click the remove button
            cy.get('.Header-MinicartButton').trigger('mouseover')   //move mouse to the Cart icon
            cy.contains('Your Cart is Empty').should('be.visible') //validate the text appears.
          }
        })
      })
    })
})