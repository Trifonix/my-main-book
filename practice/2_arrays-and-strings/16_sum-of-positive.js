// https://www.codewars.com/kata/sum-of-positive/train/javascript

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const positiveSum = (arr) => {
    let sum = 0;
    for (number of arr) { if (number > 0) sum += number; }
    return sum;
}

console.log(positiveSum([1,2,3,4,5])); // 15
console.log(positiveSum([-1,2,3,4,-5])); // 9