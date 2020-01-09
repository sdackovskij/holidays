// #1 You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function outlier(arr) {
    var odd = 0;
    var resultOdd = 0;
    var resultEven = 0;

  for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultEven = arr[i];
        } else {
          odd++;
          resultOdd = arr[i];
      }
  }
  
  if (odd === 1) {
      return resultOdd;
  } else {
      return resultEven;
  }

}

var test1 = [2, 4, 0, 100, 4, 11, 2602, 36]; // 11
var test2 = [160, 3, 1719, 19, 11, 13, -21]; // 160

//console.log(outlier(test1));

// #2 Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    var xCount = 0;
    var oCount = 0;
    for (var char of str) {
        if (char === 'x' || char === 'X') {
            xCount++;
        }

        if (char === 'o' || char === 'O') {
            oCount++;
        }
    }

    if (xCount === oCount) {
        return true;
    } else return false;
}

//console.log(XO("ooxx")); //true
//console.log(XO("xooxx")); // false
//console.log(XO("ooxXm")); // true
//console.log(XO("zpzpzpp")); // true // when no 'x' and 'o' is present should return true
//console.log(XO("zzoo")); //false

// #3 given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.

function findShort(str) {

    var result = Infinity;
    var wordBegin = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
             
            if (i - wordBegin < result) {
                result = i - wordBegin;
            }

            wordBegin = i + 1;
            
        }

        if (i === str.length - 1) {
            wordBegin--;
            if (i - wordBegin < result) {
                result = i - wordBegin;
            }
        }
    }

    return result;
}

//console.log(findShort('Waves Ripple Factom Steem Dash')); // 4

// #4 Return the number (count) of vowels in the given string. We will consider a, e, i, o, and u as vowels for this Kata. The input string will only consist of lower case letters and / or spaces.

function vowelCount(str) {
    var count = 0;
    for(var char of str) {
        if (char === 'a' || char === 'o' || char === 'i' || char === 'u' || char=== 'e') {
            count++;
        }
    }
    return count;
}

//console.log(vowelCount('abracadabra')); //5

// #5 create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filterList (arr) {
    arrResult = [];
    var k = 0;
    for(var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number') {
            arrResult[k] = arr[i];
            k++;
        }
    }
return arrResult;
}

//console.log(filterList([1, 2, 'aasf', '1', '123', 123])) //[1, 2, 123]

// #6 An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram (str) {
    var count = 0;
    str = str.toLowerCase();
    for (var char of str) {
        for (var charCompare of str) {
            if (char === charCompare) {
                count++;
            }
        }
    }
if (count === str.length)  return true;
    else return false;
}

//console.log(isIsogram("Dermatoglyphics"));  //true

// #7 

function JadeCase(str) {
str1 = '';

    for (var i = 0; i < str.length; i++) {
      
        if (i === 0) {
            str1 = str1 + str[0].toUpperCase();
            i++;
        }

        str1 = str1 + str[i];

        if (str[i] === ' ') {
           str1 = str1 + str[i+1].toUpperCase(); 
           i++;
        } 
    }
    return str1;
}

//console.log(JadeCase('How can mirrors be real if our eyes aren\'t real')) // How Can Mirrors Be Real If Our Eyes Aren't Real