describe('The greet function' , function(){
    it('Should return "Hello"' , function(){
        assert.equal('Hello',greet(''));

        //assert.deepEqual(XXXX,XXXX);
    });

    it('Should return "Hello Lloyd"' , function(){
        assert.equal('Hello, Lloyd',greet('Lloyd'));

        //assert.deepEqual(XXXX,XXXX);
    });


});