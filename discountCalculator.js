function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;

    // Fixed: start at 0 instead of 1 to ensure all items are counted correctly
    for (let i = 0; i < quantity; i++) { 
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}