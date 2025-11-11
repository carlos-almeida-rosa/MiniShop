describe('Testes de Login dio MiniShop', () => {

  beforeEach(() => {
    cy.fixture('usuarios').its('usuarioValido').as('usuarioValido')
    cy.fixture('usuarios').its('usuarioInvalido').as('usuarioInvalido')
    cy.visit('./html/index.html')
  })

  it('Verifica o título da aba da página', () => {
    cy.title().should('be.eq', 'MiniShop - Login')
  })

  it('Login com campos em branco', () => {
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('button[type=submit]').click()

    //Asserção
    //Se não tiver asserção não é considerado teste
    cy.get('div[role=alert]').should('be.visible')
  })

  it('Login com dados incorretos', () => {
    cy.get('@usuarioInvalido').then((usuario) => {
      cy.login(usuario)
    })


    //Asserção
    //Se não tiver asserção não é considerado teste
    cy.get('div[role=alert]').should('be.visible')
  })

  it('Login com dados corretos', () => {
    cy.get('@usuarioValido').then((usuario) => {
      cy.login(usuario)

      //Asserção
      cy.contains('button', 'Sair').should('exist')

      cy.title().should('be.eq', 'MiniShop - Home')
    })

  })
})