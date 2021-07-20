describe('return number registration numbers in the string that is from that town' , function(){

 var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

    it('the count from Stellies"' , function(){
        assert.equal(fromStellies, 3)
    });
    it('The count from Kuilsriver"' , function(){
        assert.equal(fromKuilsriver, 1)
    });


});