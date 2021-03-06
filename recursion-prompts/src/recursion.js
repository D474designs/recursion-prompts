/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n === 0) return 1;
  if (n < 0) return null;
  return n * factorial(n -1);
};
// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) return 0;
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  if (Array.isArray(array[0])) {
    return arraySum(array[0]) + arraySum(array.slice(1));
  }
  return array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) return true;
  else if (n === 1) return false;
  return isEven(Math.abs(n - 2));
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (Math.abs(n) <= 1) return 0;
  if (n === 2) return 1;
  if (n === -2) return -1;
  if (n < 0) return (n + 1) + sumBelow(n + 1);
  return (Math.abs(n) - 1) + sumBelow(Math.abs(n) - 1);
};

// var sumBelow = function(n) {
//  if (n === 0) {
//    return 0;
//  } if(n < 0) {
//    return n + 1 + sumBelow(n +1);
//  }
//    return n - 1 + sumBelow(n-1);
//  };

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x === y || x === y -1 || y === x -1) {
    return [];
  }
  if (x < y) {
    var array = range(x, y - 1);
       array.push(y - 1);
       return array;

  }
  if (x > y) {
    var array = range(x, y + 1);
       array.push(y + 1);
       return array;
}
var list = range(start_num, end_num - 1);
   list.push(end_num - 1);
   return list;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (base === 0 || exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return 1 / (base * exponent(base, -1 * exp - 1));
  }
  else {
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) { return true; }
  if (n === 0 || n % 2 === 1) { return false; }

  // recursive case
  return powerOfTwo(n / 2);
};

// code from question 4 requires modification to pass
// var powerOfTwo = function(n) {
//   if (n === 0) return true;
//   else if (n === 1) return false;
//   return powerOfTwo(Math.abs(n - 2));
// };

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // This is the terminal case that will end the recursion
  if (string === "")
  return "";

  else
  return reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // base cases
  if (string === '' || string.length === 1) { return true; }
  if (string[0].toLowerCase() !== string.slice(-1).toLowerCase()) { return false; }

  // recursive case
  return palindrome(string.substring(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  <!--'base cases'-->
  if (y === 0) { return NaN; }

  if (x < 0 && y < 0) {
    if (x > y) { return x; }
  } else if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    if (-x < y) { return x; }
    <!-- 'recursive case 1' -->
    return modulo(x + y, y);
  } else {
    if (x < y) { return x; }
  }

  <!--'recursive case 2'-->
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  <!--'base case'-->
  if (x === 0 || y === 0) {
    return 0;
  <!--'recursive cases'-->
  } else if (y < 0) {
    return -x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};


// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
  <!--'base cases'-->
  if (y === 0) { return NaN; }
  if (x === 0) { return 0; }
  if (x < 0 && y > 0 && -x < y || x < -y) { return 0; }
  if (x > 0 && y > 0 && x < y) { return 0; }

  <!--'recursive cases'-->
  if (x > 0 && y > 0) {
    return 1 + divide(x - y, y);
  } else {
    return -1 + divide(x + y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  // base cases
  if (x < 0 || y < 0) { return null; }
  if (y % x === 0) { return x; }

  // recursive cases
  return x > y ? gcd(y, x) : gcd(x, y % x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base cases
  if (str1 === '' && str2 === '') { return true; }
  if (str1.charAt(0) !== str2.charAt(0)) { return false; }

  // recursive case
  return compareStr(str1.substr(1), str2.substr(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  return str.length === 1 ? [str.charAt(0)] : [str.charAt(0)].concat(createArray(str.substr(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  return !array.length ? array : reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  return length === 0 ? [] : [value].concat(buildList(value,length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var results = [];
  var val = n;

  // base case
  if (n === 0) { return results; }

  // recursive cases
  if (n % 3 === 0 && n % 5 !== 0) { val = 'Fizz'; }
  if (n % 3 !== 0 && n % 5 === 0) { val = 'Buzz'; }
  if (n % 3 === 0 && n % 5 === 0) { val = 'FizzBuzz'; }
  results.push(val.toString());

  return fizzBuzz(n - 1).concat(results);
  };

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base case
if (array.length === 0) { return 0; }

// recursive case
var increment = array[0] === value ? 1 : 0;
return increment + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
var rMap = (array, callback) => {
  //return array with callback if array length is 1
  if(array.length === 1) {
  return callback(array);
}
  //return first index from array with callback while slicing array
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};
// console.log(rMap([1,2,3], function(times){
// return times * 2
// }))

// rMap([1,2,3], timesTwo); // [2,4,6]
// function timesTwo(n) {
//     return n * 2;
// };
// var rMap = function(array, callback) {
//
//
//   var newArr = [];
//   if (array.length === 0) [];
//   if (newArr.length === array.length) [];
//   return newArr.push(timesTwo(array.slice(1))) + rMap(array, callback);
// };

// var rMap = function(array, callback) {
//   var newArr = [];
//   if (array.length === 0) {
//     return [];
//   }
//   if (newArr.length === array.length) {
//     return newArr.push(array[0]);
//   }
//   return newArr.push(array.slice(1));
// };

// var rMap = function(array, callback) {
//
// rMap([1,2,3], x => x*2);
//
// function rMap(array, callback) {
//   let newArr = [];
//   if (array.length <= 1){
//     return newArr.push(callback(array[0]));
//   } else {
//     newArr.push(callback(array[0]))
//     return newArr.concat(rMap(array.slice(1), callback));
//   }}
// };

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, query) {
      var count = 0;
    for (var key in obj) {
        var item = obj[key];
        if (key === query) {
            count++;
        }
        //key might be an object, so no else statement
        if (typeof item === 'object') {
            count += countKeysInObj(item, query);
        }
        //if neither case, nothing to do
    }
	return count;
  // var keyCount = obj[0] === key ? 1 : 0;
  // return keyCount += countKeysInObj(obj, key);
  //return keyCount + countKeysInObj(obj, key);

    //return var keyCount += 1 + countKeysInObj(obj, key);
//     function countAllCharacters(str) {
//   // your code here
//   /* START SOLUTION */
//   var rtn = {};
//
//   for(var i = 0; i < str.length; i++){
//     //what's the point of testing for undefined?
//     if(rtn[str[i]] === undefined){
//       //set starting occurances to 0
//       rtn[str[i]] = 0;
//     }
//     //then count the amount of times it appears thereafter, if at all.
//     rtn[str[i]]++;
//   }
//   return rtn;
//   /* END SOLUTION */
// }
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
// var countValuesInObj = function(obj, value) {
function countValuesInObj(object, query) {
      var count = 0;
      for (var key in object) {
          var item = object[key];
          if (item === query) {
              count++;
          }
          if (typeof item === 'object') {
            count += countValuesInObj(item, query);
          }
      }
      return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
  var value = obj[key];
  if (key === oldKey) {
          obj[newKey] = value;
          delete obj[oldKey];
      }
  if (typeof value === 'object') {
    obj[key] = replaceKeysInObj(value, oldKey, newKey);
  }
}

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) return null;
  // if (n === 1) return [0,1,1];
  if (n > 3) return [0,1,1];
  else {
      var addOn = [fibonacci(n-1)[fibonacci(n-1).length-1] + (fibonacci(n-1)[fibonacci(n-1).length-2])];
      return fibonacci(n-1).concat(addOn);
  }

  // var nthFibo = function(n) {
  //     if(n < 0) {
  //     	return null;
  //     } else if(n === 1) {
  // 		return 1;
  // 	}
  //   	return nthFibo(n - 1) + nthFibo(n - 2);

};
//   if (n >= 0) {return null};
//   return [n].concat(fibonacci(n - (n - )))
// };

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0) {
  return null;
} else if(n === 1) {
return 1;
}
return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  // return array.map(function(elStr){return elStr[0].toUpperCase() + elStr.slice(1)});
if(array.length===1) return array[0].toUpperCase();
return newArray = [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
//   var result = [];
// if(input.length === 0) {
//     return result;
// }
// result.push(input[0].toUpperCase());
// result = result.concat(capitalizeWords(input.slice(1)));
// return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  let result = [];
if(!array.length) { return result; }
result.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
result = result.concat(capitalizeFirst(array.slice(1)));
return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  // return(String(array).split(',').map(Number));
if(array.length===1 && !Array.isArray(array[0])) return array.shift();
if(Array.isArray(array[0])) return flatten(array.shift().concat(array));
return [array.shift()].concat(flatten(array));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  let result = Array.from(arguments)[1] || {};
if(str.length === 0) {
    return result;
}
if(!result[str[0]]) {
    result[str[0]] = 1;
} else
 {
    console.log(result[str[0]], 'hey');
    result[str[0]]++;
}
return letterTally(str.slice(1), result);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if(list.length===1) return list.shift();
if(list[0]===list[1]) return compress(list.slice(1));
return [list.shift()].concat(compress(list));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  // return array.map(function(el){return el.concat(aug);});
if(array.length===1) return array[0].concat(aug);
return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
//   if (array.length === 0) { return array };
// if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
//     return minimizeZeroes(array.slice(1));
// } else {
//     return [array[0]].concat(minimizeZeroes(array.slice(1)));
// }

if(array.length===1) return array.shift();
if(array[0]===0 && array[1]===0) return minimizeZeroes(array.slice(1));
return [array.shift()].concat(minimizeZeroes(array));

};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) { return array; }
if(array[0] < 0) { array[0] = -array[0]; }
if(array[1] > 0) { array[1] = -array[1]; }
return [array[0], array[1]].concat(alternateSign(array.slice(2)));

// // return array.map(function(el, elInd){return (elInd%2) ? Math.abs(el)*(-1) : Math.abs(el);})
// if(array.length===2) return (array[0]) ? Math.abs(array[1]) : Math.abs(array[1])*-1;
// if(typeof array[0] !== 'boolean') array.unshift(true);
// if(array[0]){
//     array.splice(2,0,false);
//     return [Math.abs(array[1])].concat(alternateSign(array.slice(2)));
// }else{
//     array.splice(2,0,true);
//     return [Math.abs(array[1])*-1].concat(alternateSign(array.slice(2)));
// }

};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numNameRef = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
var strArr = str.split(' ');
if(strArr.length===1) return (!isNaN(Number(strArr[0]))) ? numNameRef[Number(strArr[0])] : strArr[0];
var strRet = (strArr.slice(1).join(' '));
return (!isNaN(Number(strArr[0]))) ? (numNameRef[Number(strArr[0])] + ' ' + numToText(strRet)) : (strArr[0] + ' ' + numToText(strRet));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  var leftArr=[];
var rightArr=[];
var arrayLengthHalf = array.length/2;
var midPt = Math.floor(arrayLengthHalf);
leftArr = array.slice(0,midPt);
rightArr = array.slice(midpt+1);
if(leftArr.length>1) return mergeSort(leftArr).concat(mergeSort(rightArr));
return leftArr;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
