// add new value beginning of array
let size = [22,24,26,28];
size.unshift(20);

console.log(size);

size.shift();
console.log(size);

/* let i = 0;
while(i <= products.length -1) {
    console.log(products[i]);
    i++;
}
*/
let products = ["Nokia","Honor","Redmi","Sony"];

for (product of products) {
    console.log(product);
}