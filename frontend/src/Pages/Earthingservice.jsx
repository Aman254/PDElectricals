import React from "react";
import Gridpricing from "../Components/Gridpricing";
import image1 from "../Assets/Images/earthing.jpeg";
import image2 from "../Assets/Images/earthing2.jpeg";
import image3 from "../Assets/Images/earthingchemical1.jpeg";
import image4 from "../Assets/Images/lightarrestor.jpeg";
import image5 from "../Assets/Images/earthingStrip.jpeg";
import image6 from "../Assets/Images/boring.jpeg";

export default function Earthingservice() {
  return (
    <div>
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Heading */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Ground Earthing Services
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              PdElectricals provides top-quality ground earthing solutions with
              our GI Earthing Electrodes (50mm and 80mm) and Copper Electrodes
              (10ft).
            </p>
          </div>
          {/* /Heading */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <Gridpricing
              title="GI 50mm Earthing"
              price="3000/-"
              description="50mm GI Earthing electrode of 10ft height and Included with complete Installation with Chemical."
              image={image2}
            />
            <Gridpricing
              title="GI 80mm Earthing"
              price="4000/-"
              description="80mm GI Earthing electrode of 10ft height and Included with complete Installation with Chemical."
              image={image2}
            />
            <Gridpricing
              title="Copper 50mm Earthing"
              price="7500/-"
              description="50mm Copper Earthing electrode of 10ft height and Included with complete Installation with Chemical."
              image={image1}
            />
            <Gridpricing
              title="Copper 80mm Earthing"
              price="8500/-"
              description="80mm Copper Earthing electrode of 10ft height and Included with complete Installation with Chemical."
              image={image1}
            />
            <Gridpricing
              title="Chemical Only"
              price="500/-"
              description="Chemical only for Earthing Eletrodes of all types."
              image={image3}
            />
            <Gridpricing
              title="Light Arrestor"
              price="1500/-"
              description="Light Arrestor for Building and Complexes and School etc.."
              image={image4}
            />
            <Gridpricing
              title="Earthing Strip"
              price="60/- per Kg"
              description="Earthing Strip also available in Copper for more Enquire now"
              image={image5}
            />
            <Gridpricing
              title="Earthing Boring only"
              price="600/- per Bore"
              description="Earthing Boring only "
              image={image6}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
