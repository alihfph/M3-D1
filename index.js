// 1)
// Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.


function trippleValue(a,b) {  
  return (a===b ? (a+b)*3 : a+b)

}
// console.log(trippleValue(3,3))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function sumNumber(a,b) {
  return ((a===50 || b===50 ) || a+b === 50) ? true : false
  }
// console.log(sumNumber(50,5))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function specifiedPosition(givenString) {
   return (givenString.slice(0, -5))
  }
  // console.log(specifiedPosition("I am here and what"))

/*

4)
 Create a function to find the largest of three given integers.
*/
function Largestinteger(x,y,z)  {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}
// console.log (Largestinteger(2,6,99))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

function rangNumber(x,y) {
  return ((x< 60 & x>40) || (x< 100 & x>70) & (y<60  & y>40) || (y< 100 & x>70)) ? true : false 
  }
  // console.log(rangNumber(75,46))
  // console.log(rangNumber(40,30))

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function positiveNumber(creatAnewString) {
  return(creatAnewString.repeat(4))
  }

  console.log(positiveNumber("Hi am from..!"))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function cityName(x) {
    
  return (x.includes("Los") || x.includes("New")  ? x : "")
  }
  // console.log(cityName("NewZealand"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const isabel= [6,8,1]
function threeElementSum(arr) {
  const reducer = (a, b) => a + b;
 return (arr.reduce(reducer))
  }
  console.log(threeElementSum(isabel))

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function testOfAnArray(arr) {
  if (arr.includes(1) || arr.includes(3) ) {
    return ("yes it is")
  }

  }
// console.log(testOfAnArray(isabel))

// 10)

// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

function arrayDoesNot(arr) {
  if (arr.includes(1) || arr.includes(3) ) {
    return ("no it  is not")
  }

  }
  // console.log(arrayDoesNot(isabel))

// 11)

// Create a function to find the longest string from a given array of strings.

const plorp = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const longest = plorp.reduce(function(a, b) { 
  return a.length > b.length ? a : b
}, '');
// console.log(longest);
// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

function angle_Type(angle) {
  if(angle < 90) {
    return "Acute angle.";
  }
  if(angle > 90) {
    return "Right angle.";
  }
  if(angle > 90 & angle < 180 ) {
    return "btuse angle.";
  }
  else {
  return "Straight angle.";
}
}
// console.log(angle_Type(165))


// 13)

// Create a function to find the index of the greatest element of a given array of integers
const longestarray1 = [1, 9, 2,8,9,3,15];
function greatesteLElement(arr) { 
  return (Math.max(...arr))
 }
//  console.log(greatesteLElement(longestarray1))

// 14)

// Create a function to get the largest even number from an array of integers.

function max_even(arra) {

  arra.sort((x, y) => y - x);

  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 1 == 0)
      return arra[i];
    }
  }
  // console.log(max_even([1,5,7,98,9,15,101]))

// 16)

// Create a function to check from two given integers, whether one is positive and another one is negative.

function positiveandNegative(x,y) {
  return (x<0 && y>0) || (x>0 && y<0) ? "this is negative and positive" : "nop"
  }
  
// console.log(positiveandNegative(5,5))

// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
function capitalize(s)
{
    return s.charAt(0).toLowerCase(0) + s.substring(1);;
}
  // console.log(capitalize("HI i am"))
// 18)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
function range50To80 (x,y) {
  return ((x+y) <80 || (x+y) > 60 ? 65 : 80)
  }
  // console.log(range50To80(30,30))
// 19)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".
function numberToString(x) {

  }

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

function acronym(text) {
  return text.split(/\s/).reduce(function(accumulator, word) {
      return accumulator + word.charAt(0);
    }, '');
}

// console.log(acronym('European Union'));