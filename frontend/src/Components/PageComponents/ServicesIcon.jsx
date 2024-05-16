import React from "react";
import { Link } from "react-router-dom";
export default function ServicesIcon({ image, title, link }) {
  return (
    <div
      className="flex flex-col justify-between items-center p-4 m-6 gap-2"
      key={title}
    >
      <div>
        <Link>
          <img
            src={image}
            alt="Icon"
            className="rounded-lg h-20 transition ease-in-out delay-150 hover:-translate-y-1 
            hover:scale-110 duration-100 ... cursor-pointer"
          />
        </Link>
      </div>
      <div className="max-w-20">
        <span className="font-poppins text-slate-700 leading-tight">
          <Link className="transition-all hover:text-slate-950 hover:underline relative leading-5">
            {" "}
            {title}
          </Link>
        </span>
      </div>
    </div>
  );
}
