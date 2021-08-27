/// <reference types ="Cypress" />

describe("API Chaining example",function(){

    let firstcity;

    it('Test API Chain',function(){

        cy.request({
            method :'GET',
            url : 'https://www.metaweather.com/api//api/location/search/?query=san'
       }).then((resp)=>{
           firstcity = resp.body[0].title;
        cy.log(firstcity)
       }).then(()=>{
           cy.request({
            method :'GET',
            url : 'https://www.metaweather.com/api//api/location/search/?query='+firstcity,
           }).then((response)=>{
                expect(response.body[0].title).eq(firstcity);
                expect(response.status).eq(200)
           })

       })

       })
     

  


    })



