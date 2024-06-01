import React from "react";
import Gridpricing from "../Components/Gridpricing";
import image1 from "../Assets/Images/electrician.jpeg";
import image2 from "../Assets/Images/electrician4.jpeg";
import image3 from "../Assets/Images/electrician5.jpeg";
import image4 from "../Assets/Images/electrician6.jpeg";
import image5 from "../Assets/Images/electrician7.jpeg";
import image6 from "../Assets/Images/electrician3.png";

export default function Electricservices() {
  return (
    <div>
      {" "}
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Heading */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Electrical
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              PdElectricals offers comprehensive electrical home services,
              including fault repairs, wiring, and appliance installation and
              maintenance.
            </p>
          </div>
          {/* /Heading */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <Gridpricing
              title="Meter & Fuse"
              image={image1}
              description="Note these are visiting Charges please click on Enquire now to know more"
              price="250/-"
            />
            <Gridpricing
              title="Wiring"
              image={image2}
              description="Note these are visiting Charges please click on Enquire now to know more"
              price="250/-"
            />
            <Gridpricing
              title="Fan Repair & Install"
              image={image3}
              description="Note these are visiting Charges please click on Enquire now to know more"
              price="250/-"
            />
            <Gridpricing
              title="Light"
              image={image4}
              description="Note these are visiting Charges please click on Enquire now to know more"
              price="250/-"
            />
            <Gridpricing
              title="Switch and Sockets"
              image={image5}
              description="Note these are visiting Charges please click on Enquire now to know more"
              price="250/-"
            />
            <Gridpricing
              title="Stablizer Intallation Repair"
              image={image6}
              description="Note these are visiting Charges please click on Enquire now to know more"
              price="250/-"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
