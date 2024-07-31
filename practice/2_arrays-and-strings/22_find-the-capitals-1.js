// https://www.codewars.com/kata/find-the-capitals-1/train/javascript

// Write a function that takes a single non-empty string of only lowercase 
// and uppercase ascii letters (word) as its argument, and returns an ordered list 
// containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

const capitals = function (word) {
    let arr = [];
	for (let i = 0; i < word.length; ++i) {
        if (word[i].charCodeAt()<91) arr.push(i);
    }
    return arr;
};

console.log(capitals('CodEWaRs')); // [0,3,4,6]