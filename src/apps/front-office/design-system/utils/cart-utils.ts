export function calculateCartTotals(
  cart,
  itemId?: number,
  newQuantity?: number,
) {
  if (itemId !== undefined && newQuantity !== undefined) {
    const item = cart.items.find(item => item.id === itemId);
    if (item) {
      item.quantity = newQuantity;
      item.total = {
        discount: item.total.discount,
        finalPrice: (item.salePrice || item.price) * item.quantity,
        price: item.total.price,
        salePrice: (item.salePrice || item.price) * item.quantity,
      };
    }
  }

  const subtotal = cart.items.reduce((acc, item) => {
    return acc + (item.salePrice || item.price) * item.quantity;
  }, 0);

  const tax = (cart.taxRate / 100) * subtotal;
  const finalPrice = subtotal + tax;

  const totalQuantity = cart.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  cart.totals = {
    subtotal,
    tax,
    finalPrice,
    salePrice: finalPrice,
    quantity: totalQuantity,
  };
}
