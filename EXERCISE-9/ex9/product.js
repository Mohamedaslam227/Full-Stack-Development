"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductbyId = void 0;
var readline = require("readline");
// Define an array of product objects
var products = [
    { id: 1, name: "Maggi Noodles", price: 10, description: "Instant noodles with a unique blend of spices." },
    { id: 2, name: "Colgate Toothpaste", price: 20, description: "Fluoride toothpaste for cavity protection and fresh breath." },
    { id: 3, name: "Dettol Hand Sanitizer", price: 30, description: "Hand sanitizer gel for on-the-go germ protection." },
    { id: 4, name: "Nike Running Shoes", price: 80, description: "High-quality running shoes for athletes." },
    { id: 5, name: "Samsung Galaxy Smartphone", price: 500, description: "Feature-packed smartphone with a sleek design." },
    { id: 6, name: "Apple MacBook Pro", price: 1500, description: "Powerful laptop for professionals and creatives." },
    { id: 7, name: "Sony Noise Cancelling Headphones", price: 250, description: "Wireless headphones with industry-leading noise cancellation." },
    { id: 8, name: "Amazon Echo Smart Speaker", price: 100, description: "Smart speaker with Alexa voice assistant." },
    { id: 9, name: "L'Oreal Shampoo", price: 15, description: "Shampoo for soft, shiny, and healthy-looking hair." },
    { id: 10, name: "Cadbury Dairy Milk Chocolate", price: 5, description: "Creamy and delicious milk chocolate bar." }
];
// Export function getProductbyId
function getProductbyId(productId) {
    return products.find(function (product) { return product.id === productId; });
}
exports.getProductbyId = getProductbyId;
// Function to display product details
function displayProductDetails(productId) {
    var product = getProductbyId(productId);
    if (product) {
        console.log("Product Details:");
        console.log("ID:", product.id);
        console.log("Name:", product.name);
        console.log("Price:", product.price);
        console.log("Description:", product.description);
    }
    else {
        console.log("Product not found.");
    }
}
// Function to get user input
function getUserInput(prompt) {
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
}
// Example usage with user input
function displayProductDetailsWithInput() {
    return __awaiter(this, void 0, void 0, function () {
        var userInput, productIdToDisplay;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserInput("Enter the product ID: ")];
                case 1:
                    userInput = _a.sent();
                    productIdToDisplay = parseInt(userInput);
                    if (!isNaN(productIdToDisplay)) {
                        displayProductDetails(productIdToDisplay);
                    }
                    else {
                        console.log("Invalid product ID. Please enter a number.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
displayProductDetailsWithInput();
