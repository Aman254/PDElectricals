import React from "react";
import { Link } from "react-router-dom";
import Pricingcard from "../Components/Pricingcard";
import generator1 from "../Assets/Images/generator4.jpg";
import generator2 from "../Assets/Images/generator9.webp";
import generator3 from "../Assets/Images/generator5.jpeg";
import generator4 from "../Assets/Images/generator3.jpg";

export default function Generatorservice() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Diesel Generator Rentals and Services
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            PdElectricals offers reliable diesel generator rentals and services
            to ensure uninterrupted power supply.
          </p>
        </div>
        {/* text - end */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Pricingcard
            name="Generator Rentals"
            price="Enquire Now"
            image={generator1}
            link="/contactus"
          />
          <Pricingcard
            name="New Genset"
            price="Enquire Now"
            image={generator2}
            link="/contactus"
          />
          <Pricingcard
            name="Installation"
            price="Enquire Now"
            image={generator4}
            link="/contactus"
          />
          <Pricingcard
            name="Repair / Service"
            price="Enquire Now"
            image={generator3}
            link="/contactus"
          />
        </div>
      </div>
    </div>
  );
}
