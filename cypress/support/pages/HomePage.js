export class HomePage{
    // Seletores (atributos)
    botaoSair = () => cy.contains('button', 'Sair')
    listaProdutos = () => cy.get('#product-list')
    title = 'MiniShop - Home'

    visitar(){
        cy.visit('./html/home.html')
    }

    verificarTitulo(){
        cy.title().should('be.eq', this.title)
    }


    // Ações (métodos)
}