import { describe, test } from 'vitest';
import { divide } from '../src/calculate';
import { expect } from 'chai';

describe('Calculate module Unit test suite', () => {
    test('divide(10, 2) should return 5', () => {
        const result = divide(10, 2);
        expect(result).to.be.equal (5);
    });

    test('divide(10, 0) should throw an error', () => {
        expect(() => divide(10, 0)).to.throw('Division by zero is not allowed.');
    });

    test('divide(10,NaN) should throw an error', () => {
        expect(() => divide(10, NaN)).to.throw('Division by zero is not allowed.');
    });
});
