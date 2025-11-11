export class LoginPage{
    // Ações
    login(usuario, senha){
        cy.login({usuario: usuario, senha: senha})
    }
}