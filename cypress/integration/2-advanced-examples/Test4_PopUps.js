/// <reference types="Cypress" />

// In cypress, elements can only be located using CSS selectors

describe('My Fourth Test Suite', function()
{

    it('My Fourth Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //For the alerts, Cypress handles them automatically, but what if we want to assert the text of the alert?
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //To trigger this kind of alerts we use window:alert
        //We use 'on' to activate the alert for the user
        cy.on('window:alert', (str)=>{
            //To compare strings in Mokka
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>{
            //To compare strings in Mokka
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})