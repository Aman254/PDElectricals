import React from "react";
import Gridpricing from "../Components/Gridpricing";

export default function ACservice() {
  return (
    <div>
      {" "}
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Heading */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              AC Services and Repair
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              PdElectricals offers comprehensive AC services, including
              installation, maintenance, and repair for all types of air
              conditioning units.
            </p>
          </div>
          {/* /Heading */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <Gridpricing />
            <Gridpricing />
            <Gridpricing />
            <Gridpricing />
          </div>
        </div>
      </section>
    </div>
  );
}
