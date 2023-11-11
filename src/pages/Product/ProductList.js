import { useState, useEffect } from "react";
import { ProductCard } from "../../components/Elements/ProductCard";

import { Filterbar } from "./components/Filterbar";
import { useLocation } from "react-router-dom";
import { useFilter } from "../../context";
export const ProductList = () => {
  const [show, setshow] = useState(false);
  const { products, initialProductList } = useFilter();

  const search = useLocation().search;
  const searchterm = new URLSearchParams(search).get("q");
  console.log(products);
  useEffect(() => {
    async function productitem() {
      const data = await fetch(
        `http://localhost:8000/products?name_like=${
          searchterm ? searchterm : ""
        }`
      );
      const response = await data.json();

      initialProductList(response);
    }
    productitem();
  }, [searchterm]);
  return (
    <main className="my-4">
      <section className="my-4">
        <div className="flex justify-between">
          <span className="font-semibold text-2xl dark:text-white">
            All E-Book({products.length})
          </span>
          <span>
            <button
              id="dropdown"
              type="button"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              onClick={() => setshow(!show)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div>{show && <Filterbar setshow={setshow} />}</div>
      </section>
    </main>
  );
};
