// 1. STR REVERSAL ******************************

function reverseString(str) {
  console.log(
    str
    .split("")
    .reverse()
    .join("")
  );

  //************************************ */

  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // console.log(revString);

  //************************************ */

  // let revString = '';
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // console.log(revString);
  // }

  //************************************* */

  // let revString = '';
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // console.log(revString);

  //************************************* */

  // let revString = '';
  // str.split('').forEach(char => revString = char + revString );

  // console.log(revString);

  //************************************* */

  // return str.split('').reduce((revString, char) => char + revString, '');
}

reverseString("Rupert die katze");

// 2. VALIDATE PALINDROMES ************************
// Return true if palidrome and false if not
// racecar is a palidrome for example
function isPalidrome(str) {
  const revString = str
    .split("")
    .reverse()
    .join("");
  console.log(revString === str);
}

isPalidrome("racecar");

// 3. INTEGRER REVERSAL ****************************
function reverseInt(int) {
  const revStr = int
    .toString()
    .split("")
    .reverse()
    .join("");

  console.log(parseInt(revStr) * Math.sign(int));
}

reverseInt(-1234);

// 4. CAPITALIZE LETTERS **************************
function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');

  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // console.log(strArr.join(' '));

  // **********************************************

  // const capWords = str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');

  // console.log(capWords);

  // **********************************************

  const capWords = str.replace(/\b[a-z]/gi, char => char.toUpperCase());

  console.log(capWords);
}

capitalizeLetters("javaScript is awesome!");

// 5. FIND THE MAX CHARACTER **********************
// Return the character that is most common in the string
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach(char => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  console.log(maxChar);
}

maxCharacter("Rupert die katze");

// 6. FIZZBUZZ CHALLENGE **************************
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz();

// 7. LONGEST WORD
function longestWord(sen) {
  // Create filter array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // If I want just 1 word (the longest)
  // return sorted[0]

  // If I want multiple words
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  // Check if more than one array val
  if (longestWordArr.length === 1) {
    console.log(longestWordArr[0]);
  } else {
    console.log(longestWordArr);
  }
}

longestWord(
  "Hello there, I'm Szabi and I think JavaScript is an awesome language! Especially ES6."
);

// 8. ARRAY CHUNKING *******************************
// Split an array into chunked arrays of a specific length

function chunkArray(arr, len) {
  // const chunkedArr = [];
  // let i = 0;
  // while (i < arr.length) {
  //   chunkedArr.push(arr.slice(i, i + len));
  //   i += len;
  // }
  // console.log(chunkedArr);
  // **********************************************

  const chunkedArr = [];

  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  console.log(chunkedArr);
}

chunkArray([1, 2, 3, 4, 5, 6, 7], 3);

// 9. FLATTEN ARRAY *****************************
function flattenArray(arrays) {
  // console.log(arrays.reduce((a, b) => a.concat(b)));
  // ********************************************
  // console.log([].concat.apply([], arrays));
  // ********************************************
  console.log([].concat(...arrays));
}

flattenArray([
  [1, 2],
  [3, 4],
  [5, 6],
  [7]
]);

// 10. ANAGRAMS *********************************
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
function isAnagarm(str1, str2) {
  console.log(formatStr(str1) === formatStr(str2));
}

// Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

isAnagarm("Dormitory", "dirty room!!");

// 11. LETTER CHANGES *****************************
// Change every letter of the string to the one next in alphabetic order and capitalize the vowels
function letterChanges(str) {
  let newStr = str
    .toLowerCase()
    .replace(/[a-z]/gi, char =>
      char === "z" || char === "Z" ?
      "a" :
      String.fromCharCode(char.charCodeAt() + 1)
    );

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  console.log(newStr);
}

letterChanges("Rupert & Robin");

// 12. ADD ALL NUMS *******************************
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS

// function addAll() {
// ES5 way
// var args = Array.prototype.slice.call(arguments);
// var total = 0;
// for (var i = 0; i < args.length; i++) {
//   total += args[i];
// }
// console.log(total);
// }
// ***************************************************
function addAll(...numbers) {
  // let total = 0;

  // numbers.forEach(num => (total += num));
  // console.log(total);

  // *************************************************
  console.log(numbers.reduce((accumulator, current) => accumulator + current));
}

addAll(1, 2, 3, 4, 5);

// 13. SUM ALL PRIMES *********************************
function sumAllPrims(num) {
  let total = 0;

  // Helper function
  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  console.log(total);
}

sumAllPrims(10);

// 14. SEEK AND DESTROY *******************************
// Remove from the array whatever is in the following arguements. Return the leftover values in an array
// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);

//   function filterArr(arr) {
//     // Return true if NOT in array
//     return args.indexOf(arr) === -1;
//   }

//   console.log(arr.filter(filterArr));
// }

// ***************************************************
function seekAndDestroy(arr, ...rest) {
  console.log(arr.filter(val => !rest.includes(val)));
}

seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6);

// 15. SORT BY HEIGHT
// some people are standing in a row in a park. There are trees between them which cannot be moved. Rearrange the people by their heights in a non-descending order without moving the trees.
function sortByHeight(arr) {
  // for the indexes of the -1-s
  const arr1 = [];
  // for the values
  const arr2 = [];

  arr.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  // Sort the values in accending oder
  const sortArr = arr2.sort((a, b) => a - b);

  // Inserting the -1-s
  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// 16. MISSING LETTERS ********************************
function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing = [];

  str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else if (str.charCodeAt(i) != compare) {
      missing.push(String.fromCharCode(compare));
    }
  });

  return missing;
}

console.log(missingLetters('abcdefgi'));

// 17. EVEN AND ODD SUMS
function evenOddSums(nums) {
  let array = Array.from(arguments);
  // let arrOdd = [];
  // let arrEven = [];
  // let arrSum = [];

  // array.forEach(num => {
  //   if (num % 2 != 0) {
  //     arrOdd.push(num);
  //   } else {
  //     arrEven.push(num);
  //   }
  // });

  // arrOdd = arrOdd.reduce((a, b) => a + b);
  // arrEven = arrEven.reduce((a, b) => a + b);

  // arrSum.push(arrOdd, arrEven);

  // console.log(arrSum)
  // *************************************************
  let evenSum = 0;
  let oddSum = 0;

  array.forEach(num => num % 2 === 0 ? evenSum += num : oddSum += num);

  return [evenSum, oddSum];
}

console.log(evenOddSums(1, 2, 3, 4, 5, 6, 7))