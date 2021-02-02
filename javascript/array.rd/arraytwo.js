let products = [
    { name: "Apple", price: 50000, color: "Red"},
    { name: "Samsung", price: 30000, color: "Green"},
    { name: "Nokia", price: 20000, color: "Black"},
    { name: "Black Berry", price: 150000, color: "White"}
];

let x = products.forEach((product) => {
    if (product.color === "Green" || product.color === "White") return product;

});
console.log(x);