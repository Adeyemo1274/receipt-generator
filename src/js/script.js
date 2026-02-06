const itemName = "Luxury Sneakers";
let itemPrice = 350000;
let quantity = 5;
const taxRate = 0.07;

let subTotal = itemPrice * quantity;
let taxAmount = subTotal * taxRate;
let finalTotal = subTotal + taxAmount;

console.log(`You are buying ${quantity} ${itemName}. Your final total including tax is: $${finalTotal}`)