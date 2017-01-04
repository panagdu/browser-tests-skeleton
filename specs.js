var should = chai.should;
chai.should();

describe('Example of tests that run automatically when specs.js is modified', () => {
    describe('This suite will demonstrate the way mocha displays passing and failing tests', () => {
        it('This test should pass', () => {
            let str = "1";
            str.should.be.a('string');
        });
        it('This test should faill', () => {
            let int = "0";
            int.should.be.a('number');
        });
    });
});
