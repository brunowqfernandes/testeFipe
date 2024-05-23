describe('home', () => {
  describe('I should be able to fetch the price of the selected veichle by brand, model and year', () => {
    it('Given I am on the search page', () => {
      cy.visit('/')
    })
    it('The model select should be disabled', () => {
      cy.get('.MuiInputBase-root').eq(1).should('have.class', 'Mui-disabled')
    })
    it('The year select and the search button should not be available', () => {
      cy.get('.MuiInputBase-root').eq(2).should('not.exist')
      cy.contains('button', 'Consultar preço').should('not.exist')
    })
    it('When I select a brand from the brand select', () => {
      cy.get('.MuiFormControl-root').eq(0).click();
      cy.get('.MuiList-root li').eq(0).click();
    })
    it('Then the model select should be enabled', () => {
      cy.get('.MuiInputBase-root').eq(1).should('not.have.class', 'Mui-disabled')
    })
    it('When I select a model from the model select', () => {
      cy.get('.MuiFormControl-root').eq(1).click();
      cy.get('.MuiList-root li').eq(1).click();
    })
    it('Then the year select and the search button should be available', () => {
      cy.get('.MuiInputBase-root').eq(2).should('exist')
      cy.contains('button', 'Consultar preço').should('exist')
    })
    it('The search button should be disabled', () => {
      cy.contains('button', 'Consultar preço').should('be.disabled')
    })
    it('When I select a year from the year select', () => {
      cy.get('.MuiFormControl-root').eq(2).click();
      cy.get('.MuiList-root li').eq(2).click();
    })
    it('Then the search button should be enabled', () => {
      cy.contains('button', 'Consultar preço').should('be.enabled')
    })
    it('When I click on the search button', () => {
      cy.contains('button', 'Consultar preço').click()
    })
    it('Then the result page should be shown', () => {
      cy.url().should('include', '/result');
    })
  })
  describe('Changing options from previous select inputs', () => {
    it('Given I am on the search page', () => {
      cy.visit('/')
    })
    it('When I select a brand from the brand select', () => {
      cy.get('.MuiFormControl-root').eq(0).click();
      cy.get('.MuiList-root li').eq(0).click();
    })    
    it('Then I select a model from the model select', () => {
      cy.get('.MuiFormControl-root').eq(1).click();
      cy.get('.MuiList-root li').eq(1).click();
    })
    it('Then I change the option for the brand select', () => {
      cy.get('.MuiFormControl-root').eq(0).click();
      cy.get('.MuiList-root li').eq(1).click();
    }) 
    it('Then the model select should lost its value', () => {
      cy.get('.MuiSelect-nativeInput').eq(1).should('not.have.value');
    })
    it('Then I select a model from the model select', () => {
      cy.get('.MuiFormControl-root').eq(1).click();
      cy.get('.MuiList-root li').eq(1).click();
    })
    it('Then I select a year from the year select', () => {
      cy.get('.MuiFormControl-root').eq(2).click();
      cy.get('.MuiList-root li').eq(2).click();
    })
    it('Then I change the option for the model select', () => {
      cy.get('.MuiFormControl-root').eq(1).click();
      cy.get('.MuiList-root li').eq(1).click();
    })
    it('Then the year select should lost its value', () => {
      cy.get('.MuiSelect-nativeInput').eq(2).should('not.have.value');
    })
  })
})