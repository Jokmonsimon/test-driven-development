describe.only('the fahrenheit to celsius canary spec', () => {
    it('shows the infrastructure works', () => {
        true.should.be.true();
    })
    describe('fahrenheit to celsius converter behaves as follows', () => {
        it('212 degrees fahrenheit is 100 degrees celsius', () => {
            fahrenheit2celsius(212).should.be.equal(100);
        });
        it('32 degrees fahrenheit is 0 degrees celsius');
        it('50 degrees fahrenheit is 10 degrees celsius')
    })
})
