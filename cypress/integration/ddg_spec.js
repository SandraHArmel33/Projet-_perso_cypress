describe('Duckduckgo', function(){
    //1er test
   it('grafikart doit arriver en premier', function (){
     cy.visit('https://duckduckgo.com/')
     cy.get('#search_form_input_homepage').type('grafikart{enter}',{force: true}) 
     cy.get('#search_button_homepage').click()
     cy.get('#web_content_wrapper').contains('Grafikart | Grafikart.fr')

   })
   //2eme test
   it('grafikart doit arriver en premier quand on tape sur entrer', function (){
    cy.visit('https://duckduckgo.com/')
    cy.get('#search_form_input_homepage').type('grafikart{enter}',{force: true}) 
    cy.get('#search_button_homepage').click()
    cy.get('#web_content_wrapper').contains('Grafikart | Grafikart.fr')

  })
  //3eme test
  it('grafikart doit arriver en premier sur iphone', function (){
    cy.viewport('iphone-10')
    cy.visit('https://duckduckgo.com/')
    cy.get('#search_form_input_homepage').type('grafikart{enter}',{force: true}) 
    cy.get('#search_button_homepage').click()
    cy.get('#web_content_wrapper').contains('Grafikart | Grafikart.fr')

  })
//4eme test
it('grafikart doit arriver en premier sur iphone', function (){
    cy.viewport('iphone-X')
    cy.visit('https://duckduckgo.com/')
    cy.get('#search_form_input_homepage').type('grafikart{enter}',{force: true}) 
    cy.get('#search_button_homepage').click()
    cy.get('#web_content_wrapper').contains('Grafikart | Grafikart.fr')

  })
  //5eme test
  it('grafikart doit arriver en premier sur iphone', function (){
    cy.viewport('iphone-x')
    cy.visit('https://duckduckgo.com/')
    cy.get('#search_form_input_homepage').type('grafikart{enter}',{force: true}) 
    cy.get('#search_button_homepage').click()
    cy.get('#web_content_wrapper').contains('Grafikart | Grafikart.fr')

  })


})