import * as readline from 'readline';

// Define the Product interface
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

// Define an array of product objects
const products: Product[] = [        
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
export function getProductbyId(productId: number): Product | undefined {
    return products.find(product => product.id === productId);
}

// Function to display product details
function displayProductDetails(productId: number): void {
    const product = getProductbyId(productId);
    if (product) {
        console.log("Product Details:");
        console.log("ID:", product.id);
        console.log("Name:", product.name);
        console.log("Price:", product.price);
        console.log("Description:", product.description);
    } else {
        console.log("Product not found.");
    }
}

// Function to get user input
function getUserInput(prompt: string): Promise<string> {
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

// Example usage with user input
async function displayProductDetailsWithInput() {
    const userInput = await getUserInput("Enter the product ID: ");
    const productIdToDisplay = parseInt(userInput);

    if (!isNaN(productIdToDisplay)) {
        displayProductDetails(productIdToDisplay);
    } else {
        console.log("Invalid product ID. Please enter a number.");
    }
}

displayProductDetailsWithInput();
