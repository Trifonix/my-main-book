// https://www.codewars.com/kata/create-phone-number/train/javascript

// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ===> returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    let phStr = '';
    for (let i = 0; i < numbers.length; ++i) {
      if (i===0) phStr += '(';
      else if (i===3) phStr += ') ';
      else if (i===6) phStr += '-';
      phStr += numbers[i];
    }
    return phStr;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));