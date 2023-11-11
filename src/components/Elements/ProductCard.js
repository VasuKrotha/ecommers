import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { id, name, overview, poster, price, rating, best_seller } = product;

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
              <button className="bg-blue-600 p-2 rounded-lg text-white  ">
                Add to cart +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
