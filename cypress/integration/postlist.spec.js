describe('postList', () => {
    it('Adicionar elemento a lista', () => {
        cy.visit('/')
        cy.get('#list').type('teste')
        cy.contains('adicionar').click()
    })
  })