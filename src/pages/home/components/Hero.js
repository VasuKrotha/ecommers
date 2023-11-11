import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row dark:bg-gray-900 dark:text-white justify-around">
        <div className=" my-6 w-1/2">
          <h1 className="text-4xl">Ultimate E-book store</h1>
          <p className="my-10 overflow-hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
            officia quis nostrum illum porro temporibus omnis doloremque ipsum
            officiis nisi, accusamus modi deserunt quos reprehenderit delectus
            nulla minima!
          </p>
          <Link to={"/products"}>
            <button className="w-1/4 bg-blue-900 hover:bg-blue-800 p-2 text-white rounded-lg text-xl font-semibold">
              Explore
            </button>
          </Link>
        </div>
        <div className=" my-5 bg-blue-400 lg:max-w-xl   mx-1  ">
          <img
            src="https://www.shutterstock.com/image-photo/technical-controller-working-his-workstation-260nw-669226183.jpg"
            alt="img"
            className="max-h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
