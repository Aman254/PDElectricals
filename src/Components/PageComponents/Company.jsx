import React from "react";
import CustomerMarquee from "./CustomerMarquee";
import company1 from "../../Assets/Companylogos/adityabirla.jpg";
import company2 from "../../Assets/Companylogos/arya.jpg";
import company3 from "../../Assets/Companylogos/babarchiheera.jpg";
import company4 from "../../Assets/Companylogos/bansal.jpg";
import company5 from "../../Assets/Companylogos/bansalbakers.jpg";
import company6 from "../../Assets/Companylogos/brijwasi.jpg";
import company7 from "../../Assets/Companylogos/byjus.jpg";
import company8 from "../../Assets/Companylogos/chola.jpg";
import company9 from "../../Assets/Companylogos/girraj.jpg";
import company10 from "../../Assets/Companylogos/heera.jpg";
import company11 from "../../Assets/Companylogos/karvy.jpg";
import company12 from "../../Assets/Companylogos/madhavmuskan.jpg";
import company13 from "../../Assets/Companylogos/maharana.jpg";
import company14 from "../../Assets/Companylogos/mahindra.jpg";
import company15 from "../../Assets/Companylogos/mansion.jpg";
import company16 from "../../Assets/Companylogos/mansionC.jpg";
import company17 from "../../Assets/Companylogos/mystic.jpg";
import company18 from "../../Assets/Companylogos/obc.jpg";
import company19 from "../../Assets/Companylogos/pcj.jpg";
import company20 from "../../Assets/Companylogos/sbi.jpg";
import company21 from "../../Assets/Companylogos/ska.jpg";
import company22 from "../../Assets/Companylogos/vrindawoods.jpg";
import company23 from "../../Assets/Companylogos/woodland.jpg";

const companyLogos = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
  company9,
  company10,
  company11,
  company12,
  company13,
  company14,
  company15,
  company16,
  company17,
  company18,
  company19,
  company20,
  company21,
  company22,
  company23,
];

export default function Company() {
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-white p-4 overflow-hidden">
      <div className="w-screen flex flex-col items-center">
        <h2 className=" mb-8 md:text-4xl text-2xl font-bold">
          Powering Partnerships
        </h2>
        <CustomerMarquee images={companyLogos} />
      </div>
    </div>
  );
}
