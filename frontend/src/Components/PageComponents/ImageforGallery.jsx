import React from "react";
import { Link } from "react-router-dom";

export default function ImageforGallery({ link, image, title, description }) {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4 ">
      <div className="flex relative">
        <Link to={link}>
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={image}
          />
        </Link>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-violet-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-violet-500 hover:text-violet-400 mb-1">
            <Link>Clcik Here to Explore</Link>
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
