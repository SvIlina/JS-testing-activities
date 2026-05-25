import { expect } from 'chai';

describe('First Test', () => {

    it('before global var modification age should be 18', () => {
        expect(globalThis.age).to.equal(18);
        globalThis.age = 25;
    });

    it('after age modification it should be changed in subsequent tests', () => {
        expect(globalThis.age).to.equal(25);
    });
});
