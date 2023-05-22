/* Question 1:
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

/* Question 2:
/*isArrayLengthOdd([1, 2, 3]);
isArrayLengthOdd([1, 2, 3, 4]);  */

/*
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
/*
isArrayLengthEven([1, 2, 3]);
isArrayLengthEven([1, 2, 3, 4]);
*/
/* Question 3
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
/* solution 1 */
function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}
/* console.log(addLailaToArray(["Mshary", "Hasan"]));
/* 2nd solution 
function addLailaToArray(instructors) {
  const newInstructors = instructors;
  return (newInstructors = instructors.push("Laila"));
}

addLailaToArray(["Mshary", "Hasan"]);
*/
/* console.log(newInstructors);

/* Question 4:
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */

const teams = ["Brazil", "Germany", "Italy"];
function eliminateTeam(teams) {
  return (teams = teams.pop(teams));
}
/*console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */

/*const fruits = ["apple", "orange", "banana", "kiwi"]; */

function secondHalfOfArrayIfItIsEven(fruits) {
  if (isArrayLengthEven(fruits)) {
    return (fruits = fruits.slice(fruits.length / 2, fruits.length));
  } else {
    return [];
  }
}

//*console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
/*console.log(
  secondHalfOfArrayIfItIsEven([
    "apple",
    "orange",
    "banana",
    "kiwi",
    "blueberry",
  ])
);
*/
/** Question 5:
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
//* indexof(element) = -1 means the last element in the array
//* slice(-1) returns a 1 element array with just the last element in the original array.
//* shout.indexof("!") = -1 -- it means that "!" is the last element in the array

function youGottaCalmDown(shout) {
  const searchTerm = shout.indexOf("!");

  if (searchTerm == -1) {
    return shout;
  } else {
    return shout.slice(0, searchTerm + 1);
  }
}

console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));
