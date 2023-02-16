import React from "react";
import Image from "next/image";
import discover1 from "../../assets/img/discover1.png";
import discover2 from "../../assets/img/discover2.png";

export const Discover = () => {
  const discoveries = [
    {
      _id: 1,
      img: discover1,
      title: "Hasta 30% off en pañales",
      information: "Para Adultos y Bebés",
    },
    {
      _id: 2,
      img: discover2,
      title: "Hasta 30% off en equipamiento médico",
      information: "Tu salud. Primero",
    },
  ];
  return (
    <div id="home-discover" className="container mb-5">
      <h3 className="mb-4">Descubrí</h3>
      <div className="discoveries">
        {discoveries.map((discover) => {
          return (
            <div className="element" key={discover._id}>
              <div className="container">
                <small className="text-uppercase">{discover.information}</small>
                <h3 className="text-uppercase fw-bold">{discover.title}</h3>
                <button
                  type="button"
                  className="btn btn-primary btn-sm fw-bold p-2 mt-3"
                >
                  Ver más
                </button>
              </div>
              <Image
                src={discover.img}
                alt={discover.title}
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
