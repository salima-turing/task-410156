// __tests__/stats.test.js
const { calculateMean, calculateStandardDeviation } = require('./stats');

describe('Statistics Utility Functions', () => {
    test('calculateMean correctly calculates the mean', () => {
        const data = [10, 12, 23, 23, 16, 23, 21, 16];
        const mean = calculateMean(data);
        expect(mean).toBe(18.125);
    });

    test('calculateMean throws an error for invalid data', () => {
        expect(() => calculateMean([])).toThrow('Invalid data');
        expect(() => calculateMean('invalid')).toThrow('Invalid data');
    });

    test('calculateStandardDeviation correctly calculates the standard deviation', () => {
        const data = [10, 12, 23, 23, 16, 23, 21, 16];
        const stdDev = calculateStandardDeviation(data);
        expect(stdDev).toBeCloseTo(5.240, 3); // Allowing some tolerance
    });

    test('calculateStandardDeviation throws an error for invalid data', () => {
        expect(() => calculateStandardDeviation([])).toThrow('Invalid data');
        expect(() => calculateStandardDeviation('invalid')).toThrow('Invalid data');
    });
});
