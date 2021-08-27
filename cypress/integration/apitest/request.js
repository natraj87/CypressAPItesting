/// <reference types ="Cypress" />

describe("First APi Test",function(){

    const token = 'Bearer 8bbbf45d22d679529b4a1872d19971c481fd1cfd731baa9c4c68f4ebe0e888ac'

 it("API Get Test",function(){

  cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v1/users',
      headers :{
        Authorization : token
      }

  }).then((res)=>{
        expect(res.status).to.eq(200)
        

  })

})


  it("API Get user by id",function(){
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v1/users/43',
        headers :{
          Authorization : token
        }
  
    }).then((res)=>{
          expect(res.status).to.eq(200)
          expect(res.body.data.id).to.eq(43)
          expect(res.body.data.name).to.eq("Miss Baladitya Jha")
  
  

 })


})

})