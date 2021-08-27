/// <reference types ="Cypress" />

describe("API Chaining example",function(){

    

    it('Test API Chain',function(){

        cy.request({
            method :'GET',
            url : 'https://www.metaweather.com/api//api/location/search/?query=Am'
       }).then((resp)=>{
           const location = resp.body
           return location
       }).then((location)=>{
           for(let i=0 ; i <location.length ; i++)
           {
            cy.request({
                method :'GET',
                url : 'https://www.metaweather.com/api//api/location/search/?query='+location[i].title,
               }).then((response)=>{
                    expect(response.body[0].title).eq(location[i].title);
                    expect(response.status).eq(200)
               })
           }

       })
           
           

       })

       })