import { createContext, useContext, useReducer } from "react";
import { filterreducer } from "../reducer";
const filterinitialstate = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

const FilterContext = createContext(filterinitialstate);
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterreducer, filterinitialstate);
  function initialProductList(products) {
    dispatch({
      type: "Product_List",
      payload: {
        products: products,
      },
    });
  }
  function Best_seller(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }
  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }
  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }
  function rating(products) {
    if (state.rating === "4STARSABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.rating === "3STARSABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.rating === "2STARSABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.rating === "1STARSABOVE") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  }
  const filterProductList = rating(
    sort(inStock(Best_seller(state.productList)))
  );
  const value = {
    state,
    dispatch,
    products: filterProductList,
    initialProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
