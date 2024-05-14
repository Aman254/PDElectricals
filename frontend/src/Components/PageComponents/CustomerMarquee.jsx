import React from "react";

import Marquee from "react-fast-marquee";

const CustomerMarquee = ({ images }) => {
  return (
    <div>
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        style={{ width: "100%" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Customer ${index + 1}`}
            className="h-20 md:h-14 lg:h-20 mx-4 object-contain rounded-lg overflow-hidden"
          />
        ))}
      </Marquee>
      <div className="mt-10">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          direction="right"
          style={{ width: "100%" }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Customer ${index - 1}`}
              className="h-20 md:h-14 lg:h-20 mx-4 object-contain rounded-lg overflow-hidden"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CustomerMarquee;
