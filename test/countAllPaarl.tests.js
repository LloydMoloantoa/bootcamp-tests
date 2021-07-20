describe('Count all the reg from paarl' , function(){

    it('count the reg that start with CJ' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('count the reg that start with CJ' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });


});