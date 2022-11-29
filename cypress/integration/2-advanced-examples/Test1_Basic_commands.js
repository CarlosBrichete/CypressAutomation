/// <reference types="Cypress" />

// In cypress, elements can only be located using CSS selectors

describe('My First Test Suite', function()
{

    it('My First Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        // In selenium, 'get' hits url in browser, in Cypress 'get' is used as findElement
        cy.wait(2000)
        //We use wait because eventhough in Cypress the test runner waits if there's a loading icon or spinner until it disappears, in this case there is not a loading icon
        cy.get('.product:visible').should('have.length',4)
        // The attribute ':visible' is to get only those visible elements, avoiding invisible
        // Should is used for assertions

        // As we are using '.products' many times, it could be better to use an ALIAS to use it more times. For that, we use 'as'
        cy.get('.products').as('productLocator')

        // Parent child chaining: This add a product by index. With 'should' we do assertions
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        
        // Console log will print directly in the BROWSER CONSOLE
        console.log('sf')
        // cy.log will print in Test Body results, like it was another test step
        cy.log('Prueba')

        // Parent child chaining: This add a product dinamically
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        // Assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // Then is used to handle customized variables (because Cypress is async, so if you dont use 'then', it will fail)
        // So, if you want to save a text into a variable, you have to handle the async way of work by yourself. Cypress will only handle async if you use la expresion completa usando puntos, como hemos hecho antes
        // 'text' is not a Cypress command
        // This is to print in logs
        cy.get('.brand').then(function(logoelement) {
            cy.log(logoelement.text())
        })
        //cy.log(logo.text())
    })
})