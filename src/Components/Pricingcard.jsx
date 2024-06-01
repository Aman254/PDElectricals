import React from "react";
import { Link } from "react-router-dom";

export default function Pricingcard({ name, price, discount, image, link }) {
  return (
    <div>
      {/* product - start */}
      <div>
        <Link
          to={link}
          className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
        >
          <img
            src={image}
            alt="img"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          {/* <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                  {discount}
                </span> */}
        </Link>
        <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
          <div className="flex flex-col">
            <Link
              href="#"
              className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
            >
              {name}
            </Link>
            <span className="text-sm text-gray-500 lg:text-base">
              Contact us for more Info
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">{price}</span>
            <span className="text-sm text-red-500 line-through">
              {discount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
