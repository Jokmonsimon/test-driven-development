function hahrenheit2celsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

function describe(){
    describe.only('the fahrenheit to celsius canary spec', () => {
        it('shows the infrastructure works', () => {
            true.should.be.true();
        })
        describe('fahrenheit to celsius converter behaves as follows', () => {
            it('212 degrees fahrenheit is 100 degrees celsius', () => {
                hahrenheit2celsius(212).should.be.equal(100);
            });
            it('32 degrees fahrenheit is 0 degrees celsius', () => {
                hahrenheit2celsius(32).should.be.equal(0);
            });
            it('50 degrees fahrenheit is 10 degrees celsius', () => {
                hahrenheit2celsius(50).should.be.equal(10);
            });
            it('-22 degrees fahrenheit is -30 degrees celsius', () => {
                hahrenheit2celsius(-22).should.be.equal(-30);
            });
        })
    })
}