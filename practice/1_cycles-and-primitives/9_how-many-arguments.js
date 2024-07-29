// https://www.codewars.com/kata/5c44b0b200ce187106452139/train/javascript

// Write a function that returns the number of arguments it received.

// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

function args_count(args){
    return arguments.length;
}

console.log(args_count(1, 2));
console.log(args_count());