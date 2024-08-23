"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Define a class to manage product operations
var ProductManager = /** @class */ (function () {
    function ProductManager(products) {
        this.products = products;
    }
    // Function to get user input
    ProductManager.prototype.getUserInput = function (prompt) {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return new Promise(function (resolve) {
            rl.question(prompt, function (answer) {
                rl.close();
                resolve(answer);
            });
        });
    };
    // Function to display product details
    ProductManager.prototype.displayProductDetails = function (productId) {
        var product = this.products.find(function (p) { return p.id === productId; });
        if (product) {
            console.log("Product Details:");
            console.log("ID:", product.id);
            console.log("Name:", product.name);
            console.log("Price:", product.price);
        }
        else {
            console.log("Product not found.");
        }
    };
    return ProductManager;
}());
// Example usage
var products = [
    { id: 1, name: "Maggi Noodles", price: 10 },
    { id: 2, name: "milk", price: 20 },
    { id: 3, name: "Dettol Hand Sanitizer", price: 30 },
    { id: 4, name: "cake", price: 80 },
    { id: 5, name: "pen", price: 5 }
];
// Create an instance of ProductManager
var productManager = new ProductManager(products);
// Call the getUserInput function
productManager.getUserInput("Enter the product ID: ").then(function (input) {
    var productId = parseInt(input);
    if (!isNaN(productId)) {
        // Call the displayProductDetails function
        productManager.displayProductDetails(productId);
    }
    else {
        console.log("Invalid product ID. Please enter a number.");
    }
});
