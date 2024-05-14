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
          <img src={image} alt="Icon" className="rounded-lg h-20" />
        </Link>
      </div>
      <div className="max-w-20">
        <span className="font-poppins text-gray-700">{title}</span>
      </div>
    </div>
  );
}
