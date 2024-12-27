// main.js - Main application file
const { calculateMean, calculateStandardDeviation } = require('./stats');

const processData = [10, 12, 23, 23, 16, 23, 21, 16];

try {
    const mean = calculateMean(processData);
    const stdDev = calculateStandardDeviation(processData);

    console.log(`Mean: ${mean}`);
    console.log(`Standard Deviation: ${stdDev}`);
} catch (error) {
    console.error('Error calculating statistics:', error.message);
}
