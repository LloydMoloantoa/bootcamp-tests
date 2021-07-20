describe('Is the reg from Bellville' , function(){
  
    it('if its CY its from Bellville"' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('if its CY its from Bellville"' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
    


});