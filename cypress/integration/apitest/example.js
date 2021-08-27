describe("basic test",function(){

    it("primary test",function(){
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(var i=0; i<10; i++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }
         string = string+ "@gmail.com";
         cy.log(string);

    })


})

