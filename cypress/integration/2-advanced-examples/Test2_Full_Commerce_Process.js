/// <reference types="Cypress" />

// In cypress, elements can only be located using CSS selectors

describe('My Second Test Suite', function()
{

    it('My Second Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        // In selenium, 'get' hits url in browser, in Cypress 'get' is used as findElement
        cy.wait(2000)
 
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })

        // Click on the bag to checkout
        cy.get('.cart-icon > img').click()

        // Click on the Proceed to checkout button
        cy.contains('PROCEED TO CHECKOUT').click()

        // Click on the Place Order button
        cy.contains('Place Order').click()
    })
})