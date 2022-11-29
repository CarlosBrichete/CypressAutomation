/// <reference types="Cypress" />

// In cypress, elements can only be located using CSS selectors

describe('My Own Test Automation', function()
{

    it('SuccessfulSubmit', function()
    {
        cy.visit("https://forms.liferay.com/web/forms/shared/-/form/122548")

        cy.wait(3000)

        cy.get('.col-md-7 > .ddm-field-container > .ddm-field > .form-group > .form-control').type('Carlos')

        cy.get('.input-group-item > .form-control').type('10/08/1990')

        cy.get(':nth-child(5) > .position-relative > .col-ddm > .ddm-field-container > .ddm-field > .form-group > .ddm-field-text').type('I love to find bugs')

        cy.get('#ddm-form-submit').click()

        cy.wait(3000)

        cy.get('.btn').should('be.visible')
    })

    it('nameNotFilled', function()
    {
        cy.visit("https://forms.liferay.com/web/forms/shared/-/form/122548")

        cy.wait(3000)

        cy.get('.input-group-item > .form-control').type('10/08/1990')

        cy.get(':nth-child(5) > .position-relative > .col-ddm > .ddm-field-container > .ddm-field > .form-group > .ddm-field-text').type('I love to find bugs')

        cy.get('#ddm-form-submit').click()

        cy.get('.form-feedback-item:visible').should('have.value','This field is required.')
    })

    it('dateNotFilled', function()
    {
        cy.visit("https://forms.liferay.com/web/forms/shared/-/form/122548")

        cy.wait(3000)

        cy.get('.col-md-7 > .ddm-field-container > .ddm-field > .form-group > .form-control').type('Carlos')

        cy.get(':nth-child(5) > .position-relative > .col-ddm > .ddm-field-container > .ddm-field > .form-group > .ddm-field-text').type('I love to find bugs')

        cy.get('#ddm-form-submit').click()

        cy.get('.form-feedback-item:visible').should('have.value','This field is required.')
    })

    it('descriptionNotFilled', function()
    {
        cy.visit("https://forms.liferay.com/web/forms/shared/-/form/122548")

        cy.wait(3000)

        cy.get('.col-md-7 > .ddm-field-container > .ddm-field > .form-group > .form-control').type('Carlos')

        cy.get('.input-group-item > .form-control').type('10/08/1990')

        cy.get('#ddm-form-submit').click()

        cy.get('.form-feedback-item:visible').should('have.value','This field is required.')
    })
})