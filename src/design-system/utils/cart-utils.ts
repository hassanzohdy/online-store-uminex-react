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
        finalPrice: (item.total.salePrice) * item.quantity,
        price: item.total.price,
        salePrice: (item.total.salePrice) * item.quantity,
      };
    }
  }

  const subtotal = cart.items.reduce((acc, item) => {
    return acc + ((item.total.salePrice) * (item.quantity || 1));
  }, 0);
  

  const tax = (cart.taxRate / 100) * subtotal;

  const discount = cart.totals.discount || 0;
  const additionalPrice = cart.totals.additionalPrice || 0;
  const commission = cart.totals.commission || 0;
  const coupon = cart.totals.coupon || 0;
  const paymentFees = cart.totals.paymentFees || 0;
  const shippingFees = cart.totals.shippingFees || 0;

  const finalPrice =
    subtotal +
    tax -
    discount +
    additionalPrice +
    commission +
    paymentFees +
    shippingFees;

  const totalQuantity = cart.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  cart.totals = {
    subtotal,
    tax,
    finalPrice,
    salePrice: finalPrice,
    quantity: totalQuantity,
    additionalPrice,
    commission,
    coupon,
    discount,
    paymentFees,
    shippingFees,
  };

  return cart;
}
