/// <reference types ="Cypress" />

describe("API Chaining example",function(){

    let titlearray = [];

    it('Test API Chain',function(){

        cy.request({
            method :'GET',
            url : 'https://www.metaweather.com/api//api/location/search/?query=Am'
       }).then((resp)=>{
           const location = resp.body
           for(let i=0 ; i <location.length ; i++)
           {
              titlearray.push(location[i].title)  
           }
           //return titlearray
           
       }).then(()=>{

        for(let j =0 ; j <titlearray.length ; j++ )
        {
        cy.request({
         method :'GET',
         url : 'https://www.metaweather.com/api//api/location/search/?query='+titlearray[j],
        }).then((response)=>{
             expect(response.body[0].title).eq(titlearray[j]);
             expect(response.status).eq(200)
        })

    
    }  
           
       })
    })
})

     