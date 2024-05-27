import React from "react";
import { Link } from "react-router-dom";

export default function Gridpricing() {
  return (
    <div>
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <Link
          to="/contactus"
          className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
        >
          <img
            src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            loading="lazy"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">April 2, 2022</span>
          <h2 className="text-xl font-bold text-gray-800">
            <Link
              to="/contactus"
              className="transition duration-100 hover:text-purple-500 active:text-purple-600"
            >
              The Pines and the Mountains
            </Link>
          </h2>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            necessitatibus molestias explicabo.
          </p>
          <div>
            <Link
              to="/contactus"
              className="font-semibold text-purple-500 transition duration-100 hover:text-purple-600 active:text-purple-700"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
