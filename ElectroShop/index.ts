
// PART 1: Variables

const storeName: string = "ElectroShop";
const storeDescription: string = "Electronic Products Store";
const currency: string = "USD";

let availableProducts: number = 5;
let isStoreOpen: boolean = true;


// PART 3: Arrays

const productNames: string[] = [
    "Laptop",
    "Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
];

// Multi-Type Array
const productData: (string | number | boolean)[] = [
    "Laptop",
    650,
    true
];


// PART 4: Conditions and Loops

if (isStoreOpen) {
    console.log("Store is Open");
} else {
    console.log("Store is Closed");
}

const price: number = 650;

if (price > 500) {
    console.log("Expensive Product");
} else if (price >= 100) {
    console.log("Medium Price");
} else {
    console.log("Affordable Product");
}

// Display all product names
for (const name of productNames) {
    console.log(name);
}

// Count products with prices greater than 100
const productPrices: number[] = [650, 400, 75, 45, 120];

let count: number = 0;

for (const itemPrice of productPrices) {
    if (itemPrice > 100) {
        count++;
    }
}

console.log("Products above 100:", count);


// PART 5: Functions

function calculateDiscount(
    originalPrice: number,
    discountPercentage: number
): number {
    return originalPrice -
        (originalPrice * discountPercentage / 100);
}

function checkProductAvailability(quantity: number): string {
    return quantity > 0 ? "In Stock" : "Out of Stock";
}

function displayStoreMessage(message: string): void {
    console.log(message);
}


// PART 6: Optional and Default Parameters

function displayProductInfo(
    name: string,
    price: number,
    description?: string,
    currency: string = "USD"
): void {
    console.log("Name:", name);
    console.log("Price:", price, currency);

    if (description !== undefined) {
        console.log("Description:", description);
    }
}


// PART 7: Rest Parameters

function calculateTotalPrice(...prices: number[]): number {
    let total: number = 0;

    for (const price of prices) {
        total += price;
    }

    return total;
}


// Function examples

console.log(calculateDiscount(500, 10));
console.log(checkProductAvailability(3));

displayStoreMessage("Welcome to ElectroShop");

displayProductInfo(
    "Laptop",
    650,
    "Core i5, 8GB RAM"
);

console.log(calculateTotalPrice(100, 200, 50, 150));


// MAIN REQUIREMENT: Array of 3 Objects

interface Product {
    name: string;
    description: string;
    price: number;
}

const products: Product[] = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];


// Load Products Function

function loadProducts(): void {
    const container = document.getElementById("productsContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    for (const product of products) {
        const card = document.createElement("div");
        card.className = "product-card";

        const title = document.createElement("h2");
        title.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const productPrice = document.createElement("strong");
        productPrice.textContent = `${product.price} ${currency}`;

        card.append(title, description, productPrice);
        container.appendChild(card);
    }
}

// Register button click
document.getElementById("loadProductsBtn")
    ?.addEventListener("click", loadProducts);
