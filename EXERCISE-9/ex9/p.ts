import * as readline from 'readline';

// Define the Product interface
interface Product {
    id: number;
    name: string;
    price: number;
}

// Define a class to manage product operations
class ProductManager {
    // Define an array of product objects
    private products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    // Function to get user input
    getUserInput(prompt: string): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise(resolve => {
            rl.question(prompt, answer => {
                rl.close();
                resolve(answer);
            });
        });
    }

    // Function to display product details
    displayProductDetails(productId: number): void {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            console.log("Product Details:");
            console.log("ID:", product.id);
            console.log("Name:", product.name);
            console.log("Price:", product.price);
        } else {
            console.log("Product not found.");
        }
    }
}

// Example usage
const products: Product[] = [
    { id: 1, name: "Maggi Noodles", price: 10 },
    { id: 2, name: "milk", price: 20 },
    { id: 3, name: "Dettol Hand Sanitizer", price: 30 },
    { id: 4, name: "cake", price: 80 },
    { id: 5, name: "pen", price: 5 }
];

// Create an instance of ProductManager
const productManager = new ProductManager(products);

// Call the getUserInput function
productManager.getUserInput("Enter the product ID: ").then((input: string) => {
    const productId = parseInt(input);
    if (!isNaN(productId)) {
        // Call the displayProductDetails function
        productManager.displayProductDetails(productId);
    } else {
        console.log("Invalid product ID. Please enter a number.");
    }
});
