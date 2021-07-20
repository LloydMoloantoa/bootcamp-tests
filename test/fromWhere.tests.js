describe('Where is the reg from', function(){

    it('Reg CY from "Bellville"' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('Reg CJ from "Paarl"' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('Reg CA from "Cape town"' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('Reg CC from "Some other place"' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });



});