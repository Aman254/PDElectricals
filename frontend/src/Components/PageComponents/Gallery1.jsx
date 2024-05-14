import React from "react";

import ImageforGallery from "./ImageforGallery";
import generator1 from "../../Assets/Images/generator1.jpg";
import generator3 from "../../Assets/Images/generator3.jpg";
import generator4 from "../../Assets/Images/generator4.jpg";

import earthing from "../../Assets/Images/earthing.jpeg";
import earthing1 from "../../Assets/Images/earthing1.jpeg";
import earthing2 from "../../Assets/Images/earthing2.jpeg";

import panel1 from "../../Assets/Images/panel3.jpeg";

export default function Galery1() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Explore Our Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover the range of services offered by PdElectricals. Click on
            each service to learn more and book your service today.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <ImageforGallery
            title="Dg Rentals"
            link="/"
            description="A Dg rents service desc"
            image={generator4}
          />
          <ImageforGallery
            title="Dg Rentals"
            link="/"
            description="A Dg rents service desc"
            image={generator3}
          />
          <ImageforGallery
            title="Dg Rentals"
            link="/"
            description="A Dg rents service desc"
            image={generator1}
          />
          <ImageforGallery
            title="Dg Rentals"
            link="/"
            description="A Dg rents service desc"
            image={earthing}
          />
          <ImageforGallery
            title="Dg Rentals"
            link="/"
            description="A Dg rents service desc"
            image={panel1}
          />
          <ImageforGallery
            title="Dg Rentals"
            link="/"
            description="A Dg rents service desc"
            image={earthing2}
          />
        </div>
      </section>
    </div>
  );
}
