import { ProductCard } from "../../../components";
import { useState, useEffect } from "react";
export const Featureproduct = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    async function fetchproducts() {
      const response = await fetch("http://localhost:8000/featured_products");
      const data = await response.json();
      setproduct(data);
    }
    fetchproducts();
  }, []);

  return (
    <div className="my-20">
      <div className="font-semibold text-center text-4xl mb-5 text-slate-800 dark:text-white">
        Feature
      </div>
      <div className="flex flex-wrap justify-center lg:flex-row ">
        {product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
