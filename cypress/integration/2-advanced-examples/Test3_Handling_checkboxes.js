/// <reference types="Cypress" />

// In cypress, elements can only be located using CSS selectors

describe('My Third Test Suite', function()
{

    it('My Third Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Checkboxes: For behaviour (checked, visible, etc) we can use should('be.whatever').
        //For properties, we use 'have', so we can compare values
        //When we use the id of an element to find it, we have to add '#' before the id
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        //To check multiple, we have to find the common between all the elements. In this case, all of them have the type=checkbox, so we can use the structure tagname[structure="value"], where tagname is the type of element and the structure is the attribute of that element
        //You can specify which values you want to check in the check() method
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')

        //Dropdowns with static options
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dropdowns with dynamic options
        //First of all we have to type something to show some options
        cy.get('#autocomplete').type('ind')
        
        //Now we find the common tag between all the options and then iterate through every element and select only the one we want
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
            if($e1.text()==="India")
            {
                cy.wrap($e1).click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

        //Dealing with visible and non visible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio buttons: They work the same as the checkboxes, we can click or we can check them
        cy.get('[for="radio1"] > .radioButton').click()
        cy.get('[for="radio2"] > .radioButton').check()
    })
})