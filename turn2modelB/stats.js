// stats.js - A simple statistics utility module
const calculateMean = (data) => {
    if (!Array.isArray(data) || data.length === 0) throw new Error("Invalid data");
    const total = data.reduce((acc, value) => acc + value, 0);
    return total / data.length;
};

const calculateStandardDeviation = (data) => {
    const mean = calculateMean(data);
    const variance = data.reduce((acc, value) => acc + (value - mean) ** 2, 0) / data.length;
    return Math.sqrt(variance);
};

// Exporting functions for external use
module.exports = {
    calculateMean,
    calculateStandardDeviation,
};
