import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
export const Search = ({ setsearchsec }) => {
  const navigate = useNavigate();
  const searchref = useRef();
  const handelsearch = (event) => {
    event.preventDefault();
    setsearchsec(false);
    navigate(`products?q=${searchref.current.value}`);
  };
  return (
    <div className="mx-auto max-w-screen-xl p-2 my-5">
      <form onSubmit={handelsearch} className="flex items-center">
        <div className="relative w-full">
          <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
          <input
            name="search"
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            autoComplete="off"
            required=""
            ref={searchref}
          />
        </div>
        <button
          type="submit"
          className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};
