import React from "react";
import Image from "next/image";
import interest1 from "../../assets/img/interest1.png";
import interest2 from "../../assets/img/interest2.png";

export const Interest = () => {
  const interests = [
    {
      _id: 1,
      img: interest1,
      title: "Hasta 25% off en iluminación",
      information: "Por tiempo limitado",
    },
    {
      _id: 2,
      img: interest2,
      title: "Hasta 30% off y 6 cuotas fijas",
      information: "Refrigeración",
    },
  ];
  return (
    <div id="home-interese" className="container mb-5">
      <h3 className="mb-4">Te puede interesar</h3>
      <div className="interests">
        {interests.map((interese) => {
          return (
            <div className="element" key={interese._id}>
              <div className="container">
                <small className="text-uppercase">{interese.information}</small>
                <h3 className="text-uppercase fw-bold">{interese.title}</h3>
                <button
                  type="button"
                  className="btn btn-primary btn-sm fw-bold p-2 mt-3"
                >
                  Ver más
                </button>
              </div>
              <Image
                src={interese.img}
                alt={interese.title}
                priority={true}
                style={{ width: "250px", height: "250px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
