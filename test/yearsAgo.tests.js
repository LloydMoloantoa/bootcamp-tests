describe('Calculate the year' , function(){

    it('Calculating from 1976' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });
    it('Calculating from 2000' , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });


});