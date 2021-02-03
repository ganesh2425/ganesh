let object = {
    name : 'JavaScript',
    value : 100
};
let subObject = {name: 'JsStartup'};
let merge = { ...object, ...subObject};

console.log(merge['name']);
console.log(merge['value']);

//challenge #3//

let num ='99';
let value ='099';

console.log(num == value);
console.log(num === value);

console.log(num >= value);
console.log(num <= value);

//challenge #4//

let array = [1,2,3,4];

array.pop();
array.shift();
array.push(5);

console.log(array.length);

//challenge #5//

let add = 1+1;
console.log(add);

let trueAdd = 1 + true;
let falseSub = 1 - false;

console.log(trueAdd);
console.log(falseSub);

//challenge #6//

let array = ['Javascript', 'Startup', 'JsStartup'];

console.log(array.length);