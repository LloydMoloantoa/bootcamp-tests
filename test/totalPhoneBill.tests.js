describe('Calculate the total phone Bill' , function(){

    it('Calculate if it "call, sms, call, sms, sms"' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('Calculate if it "call, sms"' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('Calculate if it "sms, sms"' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});