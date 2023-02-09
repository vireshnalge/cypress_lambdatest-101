describe('Lambdatest' , () => {

    it('Input Forms',() => {
        cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo");
        cy.injectAxe();
        cy.checkA11y();
        cy.get('#name').type('Viresh')
        cy.get('#inputEmail4').type('vireshnalge@gmail.com')
        cy.get('#inputPassword4').type('Welcomepsl@13')
        cy.get('#company').type('Persistent')
        cy.get('#websitename').type('Persistent.com')
        cy.get(':nth-child(3) > .pr-20 > .w-full').select('India')
        cy.get('#inputCity').type('Solapur')
        cy.get('#inputAddress1').type('A-2/177,Mantri Chandak Complecx')
        cy.get('#inputAddress2').type(' Pune Bypass Road,Soalpur')
        cy.get('#inputState').type('Maharashtra')
        cy.get('#inputZip').type('413002')  
        cy.get('.btn').click()     
        cy.get('.success-msg').should('be.visible')
        cy.screenshot('Capturing the screenshot after submit')

    })
})