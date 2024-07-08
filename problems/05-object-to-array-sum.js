/*
Write a function called objectToArraySum(obj) that iterates through all
key-value pairs of the object and returns an array of nested array where each
nested array is formatted such that the first element is the key and the second
element is the sum of all the numbers in the array value.
*/

//so first, we need to create a return array to push values into 
//

// Your code here 
let objectToArraySum = obj => {
let returnArray = []; 
let objKeys = Object.keys(obj); 
let objValues = Object.values(obj);
let valSum = 0;

  for (let i = 0; i < objKeys.length; i++) { //loop through for at least as many keys 
    returnArray.push(objKeys[i]); //push the key into the 0 index of your nested loop
    for (let j = 0; j < objValues[i].length; j++) { //go through each value
      valSum += objValues[i][j]; //add each number in objValues to valSum
      
    }
    returnArray.push(valSum); //should push valSum into the same array we created when we pushed the key value 
    valSum = 0; //as we learned in problem 2, we need to reset our counters
  }

  return returnArray;
}

 let populations = {
   neighborhood1: [10, 1, 3, 6],
   neighborhood5: [],
   neighborhood8: [5, 0, 3, 2]
 }
 console.log(objectToArraySum(populations));
// //=> [['neighborhood1', 20], ['neighborhood5', 0], ['neighborhood8', 10]]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = objectToArraySum;
} catch {}
