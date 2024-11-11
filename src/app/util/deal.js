export const getDealPrice = (deal) => {
    return deal.orderList.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.price * currentProduct.count;
    }, 0)}