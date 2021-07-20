describe('Identifying weekdays' , function(){

    it('Is Saturday a week day"' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it('Is monday a week day"' , function(){
        assert.equal(isWeekday('Monday'), true);
    });


});