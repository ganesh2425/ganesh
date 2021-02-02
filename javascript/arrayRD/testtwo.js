let products = [
    { name: "Nokia", price: 500000, color: "Red"},
    { name: "Samsung", price: 300000, color: "White"},
    { name: "Sony", price: 20000, color: "Black"},
    { name: "Lg", price: 70000, color: "Grey"},
];

let x = products.forEach((product) => {
    if (product.color === "Red" || product.color === "Black") return product;

});

console.log(x);