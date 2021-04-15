describe('Openclassroom', function(){

it('Should display comments', function(){
cy.server()
cy.fixture('comment.json').then(comment => {
    cy.route({
        method: 'GET',
        url: '/comments\.json/', //ne pas oublier les quotes
        response: comment
}).as('getContents')

})
cy.visit('https://grafikart.fr/tutoriels/carrousel-javascript-infini-990#autoplay')
//cy.get('#comments').as('comments') garder en mémoire des éléments
//recupérer l'élement en mémoire
//cy.get('@comments)
cy.get('#comments').scrollIntoView().as('comments')
cy.wait('@getComments')
cy.get('@comments').contains('1 commentaire')
})

})