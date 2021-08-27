/// <reference types ="Cypress" />

const datajson = require('../../fixtures/createuser');

describe("First APi Test",function(){

    const token = 'Bearer 8bbbf45d22d679529b4a1872d19971c481fd1cfd731baa9c4c68f4ebe0e888ac'

    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var stringemail = '';
    for(var i=0; i<10; i++){
        stringemail += chars[Math.floor(Math.random() * chars.length)];
    }
     stringemail = stringemail+ "@gmail.com";

    it("Post call test",function(){

cy.request({
    method: 'POST',
    url:'https://gorest.co.in/public/v1/users',
    headers:{
        Authorization: token
    },
    body:{
        
                "name": datajson.name,
                  "email": stringemail,
                  "gender": datajson.gender,
                  "status": datajson.status
            
    }
}).then((res)=>{
 expect(res.status).to.eq(201);
 expect(res.body.data).has.property('email',stringemail)
 expect(res.body.data).has.property('name',datajson.name)
 expect(res.body.data).has.property('gender',datajson.gender)

}).then((res)=>{

    const generatedid = res.body.data.id;

    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v1/users/'+generatedid,
        headers :{
          Authorization : token
        }
        }).then((resp)=>{

            expect(resp.body.data.id).eq(generatedid);

        })
})
})
})