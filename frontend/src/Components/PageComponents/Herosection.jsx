import React from "react";
import SearchInput from "./SearchInput";
import electrician from "../../Assets/Icons/electrician.png";
import ac from "../../Assets/Icons/ac.png";
import earth from "../../Assets/Icons/earth.png";
import generator from "../../Assets/Icons/generator.png";
import explore from "../../Assets/Icons/explore.png";
import inverter from "../../Assets/Icons/inverter.png";
import ServicesIcon from "./ServicesIcon";

export default function Herosection() {
  return (
    <section>
      <div className="dark:bg-slate-950">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
            Expert Home Services at your Doorstep
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
            Anytime , Anything , Anywhere in Mathura
          </p>
          <div className="flex flex-wrap justify-center w-full">
            <SearchInput />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-violet-200 w-full md:w-5/6 mx-auto mb-20 -mt-2 rounded-lg shadow-lg lg:-mt-36 md:h-52 h-92">
          <div className="flex flex-wrap justify-around  items-center h-full text-center">
            <ServicesIcon
              title="Electrician Services"
              image={electrician}
              link="/"
            />
            <ServicesIcon title="Appliance Repair/Ac" image={ac} link="/" />
            <ServicesIcon title="Disel Generators" image={generator} link="/" />
            <ServicesIcon title="Earthing Services" image={earth} link="/" />
            <ServicesIcon title="Inverter" image={inverter} link="/" />
            <ServicesIcon title="All services" image={explore} link="/" />
          </div>
        </div>
      </div>
    </section>
  );
}
