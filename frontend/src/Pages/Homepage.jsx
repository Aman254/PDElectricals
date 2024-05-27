import React from "react";
import Herosection from "../Components/PageComponents/Herosection.jsx";
import Galery1 from "../Components/PageComponents/Gallery1.jsx";
import Blogcards from "../Components/PageComponents/Blogcards.jsx";
import Gallery2 from "../Components/PageComponents/Gallery2.jsx";
import chimneyRepair from "../Assets/Images/chimney-repair.jpeg";
import gyeserRepair from "../Assets/Images/gyeser-repair.jpeg";
import acService from "../Assets/Images/ac-service.jpeg";
import Company from "../Components/PageComponents/Company.jsx";
export default function Homepage() {
  return (
    <div>
      <Herosection />
      <Galery1 />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Blogcards
              title="Gyeser Repair"
              description=""
              image={gyeserRepair}
              link="/services/electric"
            />
            <Blogcards
              title="Chimney Repair"
              description=""
              image={chimneyRepair}
              link="/services/electric"
            />
            <Blogcards
              title="AC Service"
              image={acService}
              link="/services/ac"
            />
          </div>
        </div>
      </section>

      <Gallery2 />

      <Company />
    </div>
  );
}
