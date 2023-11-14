import { Route, Routes } from "react-router-dom";
import { Homepage, ProductList, ProductDetail } from "../pages";
import { Cartpage } from "../pages/cart/Cartpage";
export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </>
  );
};
