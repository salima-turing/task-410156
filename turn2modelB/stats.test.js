// stats.test.js
const { calculateMean, calculateStandardDeviation } = require('./stats');

describe('statistical functions', () => {
    describe('calculateMean', () => {
        it('should calculate the mean of a valid array', () => {
            const data = [1, 2, 3, 4, 5];
            const expectedMean = 3;
            expect(calculateMean(data)).toBe(expectedMean);
        });

        it('should throw an error for an empty array', () => {
            expect(() => calculateMean([])).toThrow(new Error('Invalid data'));
        });

        it('should throw an error for a non-array input', () => {
            expect(() => calculateMean(null)).toThrow(new Error('Invalid data'));
        });
    });

    describe('calculateStandardDeviation', () => {
        it('should calculate the standard deviation of a valid array', () => {
            const data = [1, 2, 3, 4, 5];
            const expectedStdDev = Math.sqrt(2); // Approximate
            expect(calculateStandardDeviation(data)).toBeCloseTo(expectedStdDev, 2);
        });

        it('should throw an error for an empty array', () => {
            expect(() => calculateStandardDeviation([])).toThrow(new Error('Invalid data'));
        });

        it('should throw an error for a non-array input', () => {
            expect(() => calculateStandardDeviation(null)).toThrow(new Error('Invalid data'));
        });
    });
});
