import { describe, expect,  test } from 'vitest';

describe('Vitest test example suite', () => {
    describe('Vitest first test', () => {
        test('2 + 2 = 4', () => {
            expect(2 + 2).toBe(4);
        });

        test('2 + 2 != 5', () => {
            expect(2 + 2).not.toBe(5);
        });
    });
});
