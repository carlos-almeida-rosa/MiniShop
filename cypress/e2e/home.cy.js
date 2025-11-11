import { HomePage } from "../support/pages/HomePage"
import { HomePage } from "../support/pages/LoginPage"

describe('Página Home da Aplicação MiniShop', () => {
    const home = new HomePage()
    const loginPage = new LoginPage()
    beforeEach(() => {
        cy.fixture('usuarios').as('usuarios')

        cy.get('@usuarios').then((usuarios) => {
            const usuario = usuarios.usuarioValido
            home.visitar()
            loginPage.login(usuario.usuario, usuario.senha)
        })


    })

    it('Deve exibir o título correto', () => {
        home.verificarTitulo()
    })

})