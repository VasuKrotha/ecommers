export const filterreducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "Product_List":
      return { productList: payload.products };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "RATINGS":
      return { ...state, rating: payload.rating };
    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };
    case "_ONLY_IN_STOCK":
      return { ...state, onlyInStock: payload.onlyInStock };
    case "CLEAR_FILTER":
      return {
        ...state,
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        rating: null,
      };
    default:
      throw new Error("No Cae Founded!");
  }
};
