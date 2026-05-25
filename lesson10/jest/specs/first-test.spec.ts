// import { expect as expectChai } from 'chai';

describe('First test', () => {
    beforeAll(() => {
        console.log('beforeAll');
    });

    afterAll(() => {
        console.log('afterAll');
    });

    beforeEach(() => {
        console.log('beforeEach');
    });

    afterEach(() => {
        console.log('afterEach');
    });

    test('should be true', () => {
        expect(true).toBe(true);
    });

    it('should be false', () => {
        expect(false).toBe(false);
    });

    // describe('Nested describe', () => {
    //     test('example with chai assertion library', () => {
    //         expectChai(true).to.be.true;
    //     });
    // });
});
