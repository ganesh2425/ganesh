let array = Array(5);
 
let newArr = Array.of(5);

console.log(array[2]);
console.log(newArr[2]);

// challenge #1//

let newArr = array;
newArr.length = 0;

console.log(newArr.length);
console.log(array.length);
