/*
Write a function called get2CKeys(obj) that iterates through the object and
returns an array of the object's keys that have values with at least 2 'c's.
*/

// Your code here 
let get2CKeys = (obj) => {
let keys = Object.keys(obj); //turn object keys into an array
let values = Object.values(obj); //turn object values into an array
let returnKey = []; //array we are pushing positive hits into, value we are interested in
let countKey = 0; //invisible to user, just a counter

  for (let i = 0; i < values.length; i++) { //run through each of the strings
    //console.log(values[i]);
    for (let j = 0; j < values[i].length; j++) { //run through each letter of the string
      if (values[i][j] === "c") { //each time the letter "c" comes up...
        countKey += 1; //add 1 to countKey
      }
    } //nested loop ends after we get through each letter of that string, no else statement needed
      console.log(countKey);
    if (countKey >= 2) { //once nested loop runs through each letter and counts the C's 
      returnKey.push(keys[i]); //if at least 2 'c's, push keys[i] into the returnKey array
    }
    countKey = 0; //reset countkey so it works as intended
  }

//console.log(keys, values);

return returnKey;
}

const obj = {
   red: 'circle',
   blue: 'octagon',
   green: 'square'
 }
 console.log(get2CKeys(obj)); // ['red']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = get2CKeys;
} catch {}
