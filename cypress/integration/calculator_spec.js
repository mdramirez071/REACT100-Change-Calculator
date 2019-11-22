describe('End-To-End Test for Change Calculator', () => {
    it('Opens Calculator, Inputs Values, Runs Calculations', () => {
        cy.visit('http://localhost:3000')
        //Contains a button called "Calculate"
        cy.contains('Calculate')
        //Checks for Loan Balance, APR Rate, and Term elements
        cy.get('#amountDue')
        .type('13')
        cy.get('#amountReceived')
        .type('20')
        // cy.get('#term')
        // .select('30')

        //Clicks Submit button to Calculate Mortgage Amount
        cy.contains('Calculate').click()
        //Checks if final Mortgage amount is correct
        cy.get(result => expect(result).to.contain('7', 'The Change Calculator Did Not Return The Correct Amount of Change'))
    })
})