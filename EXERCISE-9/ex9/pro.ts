import * as readline from 'readline';

// Define the Product interface
interface ProductData {
    id: number;
    name: string;
    price: number;
}

// Define a class to manage products
class ProductManager {
    private products: ProductData[];

    constructor(products: ProductData[]) {
        this.products = products;
    }

    // Method to get a product by ID
    getProductById(productId: number): ProductData | undefined {
        return this.products.find(product => product.id === productId);
    }

    // Method to display product details
    displayProductDetails(productId: number): void {
        const product = this.getProductById(productId);
        if (product) {
            console.log("Product Details:");
            console.log("ID:", product.id);
            console.log("Name:", product.name);
            console.log("Price:", product.price);
        } else {
            console.log("Product not found.");
        }
    }

    // Method to get user input
    async getUserInput(prompt: string): Promise<string> {
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

    // Method to display product details with user input
    async displayProductDetailsWithInput(): Promise<void> {
        const userInput = await this.getUserInput("Enter the product ID: ");
        const productIdToDisplay = parseInt(userInput);

        if (!isNaN(productIdToDisplay)) {
            this.displayProductDetails(productIdToDisplay);
        } else {
            console.log("Invalid product ID. Please enter a number.");
        }
    }
}

// Define an array of product objects
const products: ProductData[] = [        
    { id: 1, name: "Maggi Noodles", price: 10 },
    { id: 2, name: "Colgate Toothpaste", price: 20 },
    { id: 3, name: "Dettol Hand Sanitizer", price: 30 },
    { id: 4, name: "Nike Running Shoes", price: 80 },
    { id: 5, name: "Samsung Galaxy Smartphone", price: 500 },
    { id: 6, name: "Apple MacBook Pro", price: 1500 },
    { id: 7, name: "Sony Noise Cancelling Headphones", price: 250 },
    { id: 8, name: "Amazon Echo Smart Speaker", price: 100 },
    { id: 9, name: "L'Oreal Shampoo", price: 15 },
    { id: 10, name: "Cadbury Dairy Milk Chocolate", price: 5 }
];

// Create an instance of the ProductManager class
const productManager = new ProductManager(products);

// Example usage with user input
productManager.displayProductDetailsWithInput();
