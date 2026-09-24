function calculateDiscountedPrice(quantity, pricePerItem) {
    // 1. Place debugger statement here
    debugger;

    let totalPrice = 0;

    // 2. Fix the loop initialization to start at 0 instead of 1
    for (let i = 0; i < quantity; i++) { 
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}

module.exports = calculateDiscountedPrice;

// Test invocation so `node inspect` runs the function
calculateDiscountedPrice(12, 10);