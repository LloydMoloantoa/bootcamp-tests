describe('Check vihicle registration number' , function(){

    it('check if its GP' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('check if its EC' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
    it('check if its L' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('check if its M' , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });
    it('check if itS EC' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });
    it('check if itS GP' , function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });
    it('check if its MP' , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    it('check if its MP' , function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

    
});