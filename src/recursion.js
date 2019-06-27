// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.
//The factorial of a non-negative integer that is the product
// of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(num) {
  //var factorial which holds the value of a function
  //function takes parameter, 'n'
  if (num < 0){
    //Base Case: Once n is less than 0
    return null;
    //return null
    } else if (num === 0){
      //if the value of n is strictly equal to 0
      return 1;
      //return 1
    }
  return num * factorial(num - 1);
  //if the value is NOT strictly equal to zero, start at n,
  //start the loop by recalling the 'factorial' function
  //multiplying the number by itself -1, in the recursive call
  //arguments, restarting the loop
};






// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //this function computes the sum of integers in an arry
  if (array.length === 0){
    //if the array has no elements, return 0
    return 0;
  } else if (array.length === 1){
    //otherwise, return the value at the zero index in the array
    return array[0];
 } //recursive statement that begins the loop, return the array at the zero index position
 //plus the recursive call to sum which alters the array by slicing at the first element
  return array[0] + sum(array.slice(1));
};


 
// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};// input - an array containing sub arrays






// 4. Check if a number is even.
//this function should return a boolean and should not use modulo
//this function should return true if the number is even
//return false if it as an odd number
//should also work for negative numbers
//should be recursive


var isEven = function(n) {
  //var called isEven, which is a function that checks if a number is even
  if (n === 0){
    return true;
    //BASECASE: if number strictly equals zero, return true;
  } else if (n === 1){
    //if number is strictly equal to 1, return false
    return false;
  } else if (n < 0){
    //if number is a negative number,
    return isEven(-n);
    //return the function utilizing a negative number,
  }
  return isEven(n - 2);
  //otherwise, restart the function altering the number by subracting 2
};



// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
//this function returns the sum of positive integers
//below a given number
//this function returns the sum of an array of negative
// integers
//I: A number, the summation of the integers below it to be returned
//O: A number, representing the sum of the integers below the given number
//C: should use recursin to call itself
//E: should return the sum of non-negative integers below a given integer
//E: should return the sum of an array of negative integers
var sumBelow = function(n) {
  //create a base case first
  if (n === 0){
    //if the number is 0, return 0
   return 0;
  } else if(n > 0){
    //if the number is greater than 0
  return  (n - 1) + sumBelow(n - 1);
  //(we want to countdown til its zero) return the number - 1, + the recursive call with an altered string
  //we subrtract one since we want the numbers below the given integer
} else {
  return (n + 1) + sumBelow(n + 1);
  //if it's a negative number, continue to add a positive number until the value reaches 0
}
}


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //declare a new variable called range, which is a function that
  //takes x, and y
  let newArr = [];
  if (x === y){ 
    //base case, if 'y' is S.E.T. 'x' , return the empty array
    return newArr;
  } else if (x - 1 === y || x + 1 === y) {
  //if x - 1 === y or x + 1 === y, return the empty array
    return newArr;
  } else if (x < y) {
    //otherwise if x is less than y
  newArr.push(x + 1);
  //push x + 1 into the new array
     return newArr.concat(range(x + 1, y));
     //then return the newArr concatenated with the call to range
     //passing in updated arguments
     } else if (x > y) {
       //else if x is greater than y, push the value of x - 1 into the array
       newArr.push(x - 1);
       //then return the new array concatened with the call to range
       //page in updated arguments
       return newArr.concat(range(x - 1, y));
     }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base
//number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0){
    //BASECASE: if the exponent is equal to 0, return 1
    return 1;
  }
  if (exp < 0){
    //if exponent is a negative number
    return 1 / exponent(base, -exp)
    //return 1 divided by the function call to exponent, where the base is positive and exp is negative
  }
    return base * exponent(base, exp - 1);
    //if exponent is a positive number, multiply the base by a recursive call to exponent, 
    //where the value of the exponent is altered to get closer to meeting the base case
  }


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true; 
  } //base case, if number is equal to 1, return true,resolves to true
  if (n === 0 || n % 2 === 1) {
    //if the number is equal to 0 or the remainder of the number and 2 is 1, return false
    return false; 
  }
  return powerOfTwo(n / 2);
  //otherwise, if the number is not equal to 0 or the remainder of the number and 
  //2 is not equal to one, the powerOfTwo is called recursively with n divided by 2
  
};

// 9. Write a function that accepts a string a reverses it.
function reverse (str) {
    if (str === '') {
      //if string is strictly equal to an empty string
        return '';
        //return the empty string
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }//while the function is still processing, it is called
    //recursively, with altered args. str.substr cuts out the 
    //element at the 1 position and adds it to the new string
}



// 10. Write a function that determines if a string is a palindrome.
  var palindrome = function(string) {
    string = string.replace(' ', '');
    //use replace method to ignore spaces, and then close them
    //this function takes a string
	if(string.length === 0 || string.length === 1){
	  //BASECASE: if the string is empty or has only one value, return true;
		return true;
	} else if(string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
	  //if the string is not empty, convert the 0 index value on the string to lowercase
	  //if the converted string is equal to the final value of the string which is also converted to lower case
		return palindrome(string.slice(1, string.length - 1))
	}//return a func call back to palindrome, with altered arguments, that remove the elements and return them
	//from the 1st index value to the last
	return false;
	//if both of these cases are false, return false
};
//
//
//
//
//
//
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  //input - two numbers
  //output - the remainder of x  / y 
  //constraints - dont use modulo
  //edge cases
};
//
//
//
//
//

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

/* If 'x' or 'y' equal 0, return 0. If 'y' is a negative number, return negative 'x' +
a recursive call to the multiply function, with 'x' remaining the same and 'y' + 1.
If 'y' is a positive number, return 'x' + a recursive call to multiply, with 'x' and 'y' - 1 
to continue the loop*/

var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (y < 0) {
    return -x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};

//Psuedocode within the lines will break this function!

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //This function takes two strings and compare characters within them
    if(str1.length === 0 && str2.length === 0){
        return true;
        //BASECASE: if either string is empty, return true(because yes, they are identical);
    } else if(str1[0] === str2[0]){
        return compareStr(str1.slice(1), str2.slice(1))
        //otherwise, if the value at the zero index of string one is the exact same
        //as the value at the zero index of string two
        //return a recursive call to compareStr with both parameters altered
    }
    return false;
    //otherwise, return false
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
//this function takes a string and returns an array where every letter in the string, 
//has its own index in the array
//' Jill' -> [J, i, l, l]
var createArray = function(str){
  if(str.length === 0){
    //BASECASE: if the string's length property equals 0, return the string
    return str;
       } else if (str.length === 1){
         //if the string has a length prop of one
          return [str.charAt(0)];
          //return the character at the zero index position inside an array
  } else {
    return [str.charAt(0)].concat(createArray(str.substr(1)));
    //otherwise, return the character at the zero index of the string, 
    //concatenated with the recursive call to createArray with the string taking
    //on the substr method, which splits off the value at the 1 index postion, 
    //and then returns the rest of the string
    //push method here returns a single number value, so we just set the string
    // we want to return inside an array
  }
}

// 17. Reverse the order of an array
var reverseArr = function (arr) {
  let newArr = [];
  if (arr.length === 0){
    return arr;
    //BASECASE: if the original array is empty, return it
  } else if(arr.length === 1){
    return arr[0];
    //if the original array has a length property that is strictly equal to 1,
    //return that property (written as arr[0])
  }
  return  newArr.concat(reverseArr(arr.slice(1)), arr[0]);
  //if neither of those things are the case, return the newArr + the recursive
  //call to the original array, which slices off the first value
  }
// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]


var buildList = function(value, length) {
  let list = [];
  if (length <= 0){
    return list;
  } //BASECASE if array is empty, return the empty array
  list.push(value);
  //otherwise, push the value into the list
  list = list.concat(buildList(value, length - 1))
  //after the value is pushed into list. 
  //Concat the list with a recursive call to buildList, again, taking in and pushing
  //a value, but altering the length to get closer to the base case
  return list;
  //return the new list with values pushed into it
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if(!array.length){
    //Once the array's length doesnt exist, return 0;
  return 0;
  } else {
    //if the array DOES have values in it, the first element in the array is strictly
    //equal to value plus the recursive call to countOccurence, with the array
    //argument altered in order to continue the loop
    return (array[0] === value) + countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  let newArr = [];
  //native map returns a new array with functions called on it so this one will as well
  if (array.length === 0){
    return newArr;
    //if the original array is empty, return the new array, regardless map returns an array
  }
  newArr.push(callback(array[0]));
  //if the original array DOES have value, call the function on the elements in the array,
  //and then push the mutated elements into the newArr
  return newArr.concat(rMap(array.slice(1), callback));
  //again, this func returns array so we must return the new array added to a recursive
  //call to rMap, altering the array and again taking a function
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers. 
//In the Fibonacci Sequence, each subsequent number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
 
};
// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
//this function returns a number
//the number returned by this function is the INDEX of the sequence

var nthFibo = function(n) {
   if (n < 0){
  return null;
  //BASECASE: if the number is negative, return null
  } else if(n === 1){
    return 1;
    //if the number is strictly equal to 1, return 1 (0 + 1 = 0) (this will start the loop)
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2); //these are numbers so dont concat, just add
    //if the number is anything other than a negative, 0, or 1
    //recursively call the function, altering the argument, 
    //then, take that number, and add it to another recursive call, where the number is subtracted
    //by two, the sum of these two numbers is n
  }
};



// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(arr) {
  let newArr = [];
    if(arr.length === 0) {
      //BASECASE, if the array's length is equal to zero, return the newArr;
        return newArr;
    }
    //otherwise, alter the array's zero index value to uppercase, and then push 
    //it into the newArr
    newArr.push(arr[0].toUpperCase());
    //after the value has been changed to uppercase,
    newArr = newArr.concat(capitalizeWords(arr.slice(1)));
    //newArr is reassigned to itself, added to a recursive call where the original array
    //is sliced out at the 1st index position(effectively moving to the next position)
    return newArr;
    //return the new arr with the uppercase items
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
//this function takes an array and capitalizes the first letter of each index.
//
var capitalizeFirst = function(arr) {
     let newArr = [];

    if(arr.length === 0){
      return newArr;
      //BASECASE; if the original array is empty, return the newArr
    } 
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    //if the original array is NOT empty, access the zero element in the array,
    //then, access the character at the 0 position in THAT element.
    //Mutate the characte to uppercase. 
    //THEN, add that character BACK to the array, removing the first element, replacing it with
    //theuppercase letter, and return the rest of th string
    //push these into the newArr;
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
    //newArr now equals the newArr added to the recursive call of capitalizeFirst
    //the recursive call alters the array by removing the element at the first index, 
    //effectively continuing the loop
    return newArr;
    //return the newArr;
}



// 28. Return the sum of all even numbers in an object containing nested objects.
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

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (!str.length){
    return obj;
    
  } if(obj[str[0]]) {
    ++obj[str[0]];
  } else {
    obj[str[0]] = 1;
  }
  //retain a count of each letter
  //return an object
  //object contains tallies of each letter
  return Object.assign(obj, letterTally(str.slice(1), obj));
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  let newArr = [];
  if(list.length === 0){
    return newArr;
  } else if (list[0] === list[1]){
    return newArr.concat(compress(list.slice(1)));
  } else {
    newArr.push(list[0]);
    return newArr.concat(compress(list.slice(1)));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //this function takes an array and reduces it to a single number
  let newArr = [];
  if (!array.length){
    return newArr;
  } 
  if (array[0] === 0 && array[1] === 0){
   
    } 
    else {
      newArr.push(array[0]);
    }
    return newArr.concat(minimizeZeroes(array.slice(1)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  let arr = [];
  if (!array.length) {
    return arr;
  } if (array[0] < 0){
    array[0] = -array[0];
  } if (array[1] > 0) {
    array[1] = -array[1];
  }
  arr.push(array[0], array[1]);
    return arr.concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let newArr = [];
  let num = 'zero one two three four five six seve eight nine'.split(' ');
  if(str.length === 0) {
    return newArr;
  } if (!isNaN(str[0]) && str[0] !== ' '){
    newArr.push(num[Number(str[0])]);
  } else {
    newArr.push(str[0]);
  }
  return newArr.concat(numToText(str.slice(1))).join('');
};





// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
