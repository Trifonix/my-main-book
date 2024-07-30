// https://www.codewars.com/kata/shortest-word/train/javascript

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let shortestWord = "";
    let currentWord = "";
    for (let i = 0; i < s.length; ++i) {
      if (s[i] !== " ") {
        currentWord += s[i];
      } else {
        if (currentWord.length <= shortestWord.length || shortestWord === "") {
          shortestWord = currentWord;
        }
        currentWord = "";
      }
    }
    if (currentWord.length < shortestWord.length || shortestWord === "") shortestWord = currentWord;
    return shortestWord.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(findShort("Let's travel abroad shall we")); // 2