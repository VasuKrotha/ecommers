import React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";

import FormGroup from "@mui/material/FormGroup";

import Checkbox from "@mui/material/Checkbox";
import { useFilter } from "../../../context";

export const Filterbar = ({ setshow }) => {
  const { state, dispatch } = useFilter();

  return (
    <section className="filter">
      <div
        id="drawer-disable-body-scrolling"
        className={`fixed z-40 h-screen p-5 overflow-y-auto bg-white w-1/4 md:w-72 dark:bg-gray-800 transition-transhtmlForm left-0 top-10 transhtmlForm-none`}
        tabIndex="-1"
        aria-labelledby="drawer-disable-body-scrolling-label"
        aria-modal="true"
        role="dialog"
      >
        <h5
          id="drawer-disable-body-scrolling-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Filters
        </h5>
        <button
          onClick={() => setshow(false)}
          type="button"
          data-drawer-dismiss="drawer-disable-body-scrolling"
          aria-controls="drawer-disable-body-scrolling"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close Filters</span>
        </button>
        <div className="border-b pb-3"></div>
        <div className="py-4 overflow-y-auto">
          <ul className="text-slate-700 dark:text-slate-100">
            <li className="mt-1 mb-5">
              <p className="font-semibold my-1">Sort by</p>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "lowtohigh" },
                    })
                  }
                  checked={state.sortBy === "lowtohigh" || false}
                  id="price-sort-1"
                  type="radio"
                  value=""
                  name="price-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="price-sort-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price - Low to High
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "hightolow" },
                    })
                  }
                  checked={state.sortBy === "hightolow" || false}
                  id="price-sort-2"
                  type="radio"
                  value=""
                  name="price-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="price-sort-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price - High to Low
                </label>
              </div>
            </li>

            <li className="mt-1 mb-5">
              <span className="font-semibold">Rating</span>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { rating: "4STARSABOVE" },
                    })
                  }
                  checked={state.rating === "4STARSABOVE" || false}
                  id="rating-sort-1"
                  type="radio"
                  value=""
                  name="rating-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="rating-sort-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  4 Stars & Above
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { rating: "3STARSABOVE" },
                    })
                  }
                  checked={state.rating === "3STARSABOVE" || false}
                  id="rating-sort-2"
                  type="radio"
                  value=""
                  name="rating-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="rating-sort-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  3 Stars & Above
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { rating: "2STARSABOVE" },
                    })
                  }
                  checked={state.rating === "2STARSABOVE" || false}
                  id="rating-sort-3"
                  type="radio"
                  value=""
                  name="rating-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="rating-sort-3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  2 Stars & Above
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { rating: "1STARSABOVE" },
                    })
                  }
                  checked={state.rating === "1STARSABOVE" || false}
                  id="rating-sort-4"
                  type="radio"
                  value=""
                  name="rating-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="rating-sort-4"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  1 Stars & Above
                </label>
              </div>
            </li>
            <li className="mt-1 mb-5">
              <div className="font-semibold text-xl">Other Filters</div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Best Selling Only"
                  onClick={() =>
                    dispatch({
                      type: "BEST_SELLER_ONLY",
                      payload: { bestSellerOnly: !state.bestSellerOnly },
                    })
                  }
                  checked={state.bestSellerOnly || false}
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="INSTOCK Only"
                  onClick={() =>
                    dispatch({
                      type: "_ONLY_IN_STOCK",
                      payload: { onlyInStock: !state.onlyInStock },
                    })
                  }
                  checked={state.onlyInStock || false}
                />
              </FormGroup>
            </li>
            <li className="mt-1 mb-5 px-1">
              <div className="items-center">
                <button
                  onClick={() =>
                    dispatch({
                      type: "CLEAR_FILTER",
                      payload: {
                        onlyInStock: false,
                        bestSellerOnly: false,
                        sortBy: null,
                        rating: null,
                      },
                    })
                  }
                  className=" px-4 bg-blue-900 hover:bg-blue-800 py-2 text-white rounded-lg text-xl font-semibold"
                >
                  Clear
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
