import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context";
import { useEffect, useState } from "react";
export const ProductCard = ({ product }) => {
  const { id, name, overview, poster, price, rating, best_seller } = product;
  const [inCart, setInCart] = useState(false);
  const { cartList, addToCart, removeFromCart } = useShoppingCart();
  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);
  return (
    <>
      <div className=" max-w-sm m-4 border-2 border-gray-500 rounded-md dark:bg-gray-900 dark:text-white group">
        <Link to={`/products/${id}`} className="relative">
          {best_seller && (
            <span className="absolute top-4 left-2  bg-orange-400 px-4 rounded-lg">
              Best seller
            </span>
          )}

          <img src={poster} alt={name} className="ounded-t-lg w-full h-64" />
        </Link>
        <div className="m-2">
          <Link
            to={`/products/${id}`}
            className="my-4  text-2xl font-bold text-center"
          >
            <h1>{name}</h1>
          </Link>
          <div>
            <p className="text-sm my-5 text-slate-500">{overview}</p>
          </div>
          <div className="flex justify-center">
            <Rating name="read-only" value={rating} readOnly />
          </div>
          <div className="flex justify-around my-5">
            <div>
              <h3 className="text-lg">${price}</h3>
            </div>
            <div>
              {!inCart && (
                <button
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                    product.in_stock ? "" : "cursor-not-allowed"
                  }`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )}
              {inCart && (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${
                    product.in_stock ? "" : "cursor-not-allowed"
                  }`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
