describe('The trasportation Fee' , function(){
    it('Morning trasportation Fee' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('Afternoon trasportation Fee"' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('Nightshift trasportation Fee"' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

});