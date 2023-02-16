import React from "react";
import beneficioDisney from "../../assets/img/beneficio-disney.png";
import beneficioHbo from "../../assets/img/beneficio-hbo.png";
import beneficioParamont from "../../assets/img/beneficio-paramont.png";
import Image from "next/image";

export const Benefits = () => {
  const benefits = [
    {
      _id: 1,
      img: beneficioDisney,
      title: "Benefit Disney + & Star +",
    },
    {
      _id: 2,
      img: beneficioHbo,
      title: "Benefit HBO Max",
    },
    {
      _id: 3,
      img: beneficioParamont,
      title: "Benefit Paramount +",
    },
  ];

  return (
    <div id="home-benefits" className="container mb-5">
      <h3 className="mb-4">Beneficios de Mercado Puntos<small>Ver todos los beneficios</small></h3>
      <div>
        {benefits.map((benefit) => {
          return (
            <Image
              src={benefit.img}
              alt={benefit.title}
              priority={true}
              style={{ width: "350px", height: "auto" }}
              key={benefit._id}
            />
          );
        })}
      </div>
    </div>
  );
};
