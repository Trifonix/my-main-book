// https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let newName = '';
      for (let i=0; i<name.length; ++i) {
        if (i===0) newName += name[i].toUpperCase();
        else if (name[i]===' ') {
          newName += '.';
          newName += name[i+1].toUpperCase();
        }
      }
    return newName;
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));