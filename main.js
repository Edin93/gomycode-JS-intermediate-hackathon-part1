// DO NOT CHANGE THIS

var print = console.log;
var separator = "\n---\n\n";

function areEqualArrays(listA, listB) {
    if (listA.length !== listB.length) return false;
    for (var i = 0; i < listA.length; i++) {
        if (Array.isArray(listA[i]) && Array.isArray(listA[i])) {
            return areEqualArrays(listA[i], listB[i]);
        }
        if (listB.indexOf(listA[i]) === -1) return false; 
    }
    return true;
}

function test(got, expected) {
    var prefix = "";
    var smiley = "";

    if (Array.isArray(got)  && Array.isArray(expected) && areEqualArrays(got, expected)) {
        prefix = "\u{2714} ";
        smiley = " \u{1F600}";
    } 
    else if (got === expected) {
        prefix = "\u{2714} ";
        smiley = " \u{1F600}";
    }
    else {
        prefix = "\u{2716} ";
        smiley = " \u{1F61E}";
    }
    print(prefix + "got: " + got + ", expected: " + expected + smiley)
}

// --------------------------

// Basic algorithmic scripting
print("Basic Algorithmic Scripting");
// Ex 0

/*
    Reverse the provided string.
    You may need to turn the string into an array before you can reverse it.
    Your result must be a string.
*/
function reverseStringV1(str) {
    var reversed = "";
    for(var i=1; i<str.length; i++){
        reversed += str[str.length -i];
    }
    reversed+= str[0];
  return reversed;
}

// Here do the same thing but don't use built-in functions
// such as split/reverse/join

function reverseStringV2(str) {
    var reversed = "";
    for(var i=1; i<str.length; i++){
        reversed += str[str.length -i];
    }
    reversed+= str[0];
  return reversed;
}

print("reverseStringV1");
test(reverseStringV1("Hello World"), "dlroW olleH");
test(reverseStringV1("awesomeString"), "gnirtSemosewa");
test(reverseStringV1("first second"), "dnoces tsrif");
test(reverseStringV1("madam"), "madam");
print(separator);

print("reverseStringV2");
test(reverseStringV2("Hello World"), "dlroW olleH");
test(reverseStringV2("awesomeString"), "gnirtSemosewa");
test(reverseStringV2("first second"), "dnoces tsrif");
test(reverseStringV2("madam"), "madam");
print(separator);

// Ex 1

/*  Factorialize a Number
    Return the factorial of the provided integer.
    If the integer is represented with the letter n,
    a factorial is the product of all positive integers less than or equal to n.
    Factorials are often represented with the shorthand notation n!
    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/
function factorialize(num) {
    let fact = 1;
    for(var i=1; i<=num; i++){
        fact*=i;
    }
  return fact;
}

print("factorialize");
test(factorialize(5), 120);
test(factorialize(7), 5040);
test(factorialize(9), 362880);
test(factorialize(11), 39916800);
print(separator);

 // Ex 2

/*  Check for Palindromes
    Return true if the given string is a palindrome. Otherwise, return false.
    A palindrome is a word or sentence that's spelled the same way both forward and backward,
    ignoring punctuation, case, and spacing.
    Note
    You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
    and turn everything lower case in order to check for palindromes.
    We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" 
    among others.
    We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", and "2_A3*3#A2".
*/
function palindrome(str) {
    str = str.toLowerCase();
    var trimmedStr = str.trim();
    var noSpace = "";
    var reversed = "";

    for(var i=0; i<trimmedStr.length; i++){
        if(trimmedStr[i]==" " || trimmedStr[i]=="." || trimmedStr[i]==","){
            noSpace += "";
        } else{
            noSpace += trimmedStr[i];
        }
    }
    for(var i=1; i<noSpace.length; i++){
        reversed += noSpace[noSpace.length -i];
    }
    reversed+= noSpace[0];
    if(reversed === noSpace){
        return true;
    } else{
        return false;
    }
}

print("palindrome");
test(palindrome('ab ba'), true);
test(palindrome('ab_ba'), true);
test(palindrome('7ab@ba7'), true);
test(palindrome('race car'), true);
test(palindrome('A man, a plan, a canal. Panama'), true);
test(palindrome('never odd or even'), true);
test(palindrome('nope'), false);
test(palindrome('My age is 0, 0 si ega ym.'), true);
test(palindrome('1 eye for of 1 eye.'), false);
print(separator);

// Ex 3

/*  Find the Longest Word in a String 
    Return the length of the longest word in the provided sentence.
    Your response should be a number.
*/
function findLongestWord(str) {
    var arr = str.split(' ');
    var longestStr = arr[0].length;
    for(var i=1; i<arr.length; i++){
        if (arr[i].length> longestStr){
            longestStr=arr[i].length;
        }
    }
    return longestStr;
}

print("findLongestWord");
test(findLongestWord('The quick brown fox jumped over the lazy dog'), 6);
test(findLongestWord('May the force be with you'), 5);
test(findLongestWord('Google do a barrel roll'), 6);
test(findLongestWord('What is the average airspeed velocity'), 8);
test(findLongestWord('What if we try a super-long word such as\
    otorhinolaryngology'), 19);
print(separator);

// Ex 4

/*  Title Case a Sentence  
    Return the provided string with the first letter of each word capitalized. 
    Make sure the rest of the word is in lower case.
    For the purpose of this exercise, you should also capitalize 
    connecting words like "the" and "of".
*/
function titleCase(str) {
    var arr = str.split(' ');
    var newStr = "";
    for (var i=0; i<arr.length; i++){
        arr[i]=arr[i].slice(0,1).toUpperCase() + 
            arr[i].slice(1).toLowerCase();
    }
    newStr = arr.join(' ');
    return newStr;
}

print("titleCase");
test(titleCase('I\'m a little tea pot'), 'I\'m A Little Tea Pot');
test(titleCase('sHoRt AnD sToUt'), 'Short And Stout');
test(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'),
    'Here Is My Handle Here Is My Spout');
print(separator);

// Ex 5

/*  Return Largest Numbers in Arrays  
    Return an array consisting of the largest number from each provided sub-array.
    For simplicity, the provided array will contain exactly 4 sub-arrays.
    Remember, you can iterate through an array with a simple for loop, 
    and access each member with array syntax arr[i].
*/
function largestOfFour() {
    var arr = arguments;
    var largestArr = [];
    for (var i=0; i<arr.length; i++){
        var subArr = arr[i];
        var largestInSubArr =  subArr[0]; 
        for(var j=0;j<subArr.length; j++){
            if(subArr[j]>largestInSubArr){
                largestInSubArr = subArr[j];
            }
        }
        largestArr.push(largestInSubArr);
    }
    console.log(largestArr);
    return largestArr;
}

print('largestOfFour');
test(largestOfFour([1, 2, 3, 4], [10, 20, 30, 40],
    [100, 200, 300, 400], [1000, 2000, 3000, 4000]), [4, 40, 400, 4000]);
test(largestOfFour([1, 2, 3, 4], [10, 20, 30, -40],
    [100, -200, 300, -400], [1000, -2000, -3000, -400]), [4, 30, 300, 1000]);
test(largestOfFour([1, 2, 3, 4], [5, 20, 25, 75],
    [30, -20, 33, 0], [10, 0, 0, 175]), [4, 75, 33, 175]);
test(largestOfFour([1, 2, 3, 0], [0, 20, 30, -40],
    [10, -200, 3, -400], [100, -2000, 330, -400]), [3, 30, 10, 330]);
print(separator);
// Ex 6

/*  Confirm the Ending
    Check if a string (first argument, str) ends with the given target string 
    (second argument, target).
    This challenge can be solved with the .endsWith() method, 
    which was introduced in ES2015. But for the purpose of this challenge, 
    we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
    function reverseStr(strToReverse){
        var reversed = "";
        for(var i=1; i<strToReverse.length; i++){
            reversed+=strToReverse[strToReverse.length-i];
        }
        reversed+=strToReverse[0];
        return reversed;
    }
    var reversedStr = reverseStr(str);
    var reversedTarget = reverseStr(target);
    var reversedTargetLen = reversedTarget.length;
    for(var i=0; i<reversedStr.length; i++){
        if(reversedTarget===reversedStr.slice(0,reversedTargetLen)){
            return true;
        }
        return false;
    }
}


print("confirmEnding");
test(confirmEnding('Bastian', 'n'), true);
test(confirmEnding('Connor', 'n'), false);
test(confirmEnding('He has to give me a new name', 'name'), true);
test(confirmEnding('Walking on water and developing software from a\
 specification are easy if both are frozen', 'specification'), false);
test(confirmEnding('Open sesame', 'pen'), false);
test(confirmEnding('If you want to save our world, you must hurry.\
 We dont know how much longer we can withstand the nothing', 'mountain'), false);
print(separator);

// Ex 7

/*  Repeat a string repeat a string
    Repeat a given string (first argument) num times (second argument).
    Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
    if(num>0){
        var result = "";
        for(var i=1; i<=num; i++){
            result+=str;
        }
    } else{
        result="";
    }
    return result;
}

print("repeatStringNumTimes");
test(repeatStringNumTimes('*', 3), '***');
test(repeatStringNumTimes('*', 8), '********');
test(repeatStringNumTimes('abc', 3), 'abcabcabc');
test(repeatStringNumTimes('abc', -3), '');
print(separator);

// Ex 8

/*  Truncate a string
    Truncate a string (first argument) if it is longer than the given maximum
    string length (second argument). 
    Return the truncated string with a ... ending.
    Note that inserting the three dots to the end will add to the string length.
    However, if the given maximum string length num is less than or equal to 3, 
    then the addition of the three dots does not add to the string length 
    in determining the truncated string.
*/
function truncateString(str, num) {
    if(num>3){
        if(num>=str.length){
            return str
        }
        else{
            return str.slice(0,num-3)+"...";            
        }
    } else{
        return str.slice(0,num)+"...";
    }
}


print("truncateString");
test(truncateString("A-tisket a-tasket A green and yellow basket", 11) , 
    'A-tisket...');
test(truncateString("Peter Piper picked a peck of pickled peppers", 14) ,
    'Peter Piper...');
test(truncateString("A-", 1), 'A...');
test(truncateString("Absolutely Longer", 2) , 'Ab...');
test(truncateString("A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2) , 
    'A-tisket a-tasket A green and yellow basket');
test(truncateString("A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length) ,
    'A-tisket a-tasket A green and yellow basket');
print(separator);

// Ex 9

/*  Chunky Monkey
    Write a function that splits an array (first argument) 
    into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var el = [];
    for(var i=0; i<arr.length; i+=size){
        el = arr.slice(i,i+size);
        newArr.push(el);
    }
    console.log(newArr);
    return newArr;
}

print("chunkArrayInGroups");
test(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
print(separator);

// Ex 10

/*  Slasher Flick
    Return the remaining elements of an array after chopping off n elements from the head.
    The head means the beginning of the array, or the zeroth index.
*/
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

print("slasher");
test(slasher([1, 2, 3], 2), [3]);
test(slasher([1, 2, 3], 0), [1, 2, 3]);
test(slasher(["burgers", "fries", "shake"], 1), ["fries", "shake"]);
test(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5), ["cheese", 4]);
print(separator);

// Ex 11

/*  Mutations
    Return true if the string in the first element of the array contains all of the letters of the 
    string in the second element of the array.
    For example, ["hello", "Hello"], should return true because all of the letters in the second
    string are present in the first, ignoring case.
    The arguments ["hello", "hey"] should return false because the string "hello" 
    does not contain a "y".
    Lastly, ["Alien", "line"], should return true because all of the letters in "line" 
    are present in "Alien".
*/
function mutation(arr) {

    let str0 = arr[0].toLowerCase();
    let str1 = arr[1].toLowerCase();
    for(var i=0; i<str1.length; i++){
        if(str0.indexOf(str1[i])===-1){
            return false;
        }
    }
    return true;

    // function cleanStr(str){
    //     let pureStr = "";
    //     for(var i=0; i<str.length; i++){
    //         if(pureStr.indexOf(str[i]) === -1){
    //             pureStr+=str[i];
    //         }
    //     }
    //     return pureStr;
    // }

    // let str0 = cleanStr(arr[0]).toLowerCase();
    // let str1 = cleanStr(arr[1]).toLowerCase();
    // console.log('this is str0: ', str0);
    // console.log('this is str1: ', str1);
    
    // method I
    // for(var i=0; i<str0.length; i++){
    //     if(str1.indexOf(str0[i]) === -1 || str0.indexOf(str1[i]) === -1){
    //         return false;
    //     }
    //     return true;
    // }

    // method II

    // for(var i=0; i<str0.length; i++){
    //     for(var j=0; j<str1.length; j++){
    //         if(str0.indexOf(str1[j]) === -1 || str1.indexOf(str0[i]) === -1){
    //             return false;
    //         }
    //     }
    //     return true;
    // }
}


print("slasher");
test(mutation(["hello", "hey"]), false);
test(mutation(["hello", "Hello"]), true);
test(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]), true);
test(mutation(["Mary", "Army"]), true);
test(mutation(["hello", "neo"]), false);
test(mutation(["voodoo", "no"]), false);
print(separator);
