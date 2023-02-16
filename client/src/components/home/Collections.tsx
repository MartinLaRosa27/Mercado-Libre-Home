import React from "react";
import novedad0 from "../../assets/img/novedad0.png";
import novedad1 from "../../assets/img/novedad1.png";
import novedad2 from "../../assets/img/novedad2.png";
import novedad3 from "../../assets/img/novedad3.png";
import novedad4 from "../../assets/img/novedad4.png";
import novedad5 from "../../assets/img/novedad5.png";
import novedad6 from "../../assets/img/novedad6.png";
import novedad7 from "../../assets/img/novedad7.png";
import novedad8 from "../../assets/img/novedad8.png";
import Image from "next/image";

export const Collections = () => {
  const collections = [
    {
      _id: 1,
      img: novedad1,
    },
    {
      _id: 2,
      img: novedad2,
    },
    {
      _id: 3,
      img: novedad3,
    },
    {
      _id: 4,
      img: novedad4,
    },
    {
      _id: 5,
      img: novedad5,
    },
    {
      _id: 6,
      img: novedad6,
    },
    {
      _id: 7,
      img: novedad7,
    },
    {
      _id: 8,
      img: novedad8,
    },
  ];

  return (
    <div id="home-collections" className="mb-5 container">
      <h3 className="mb-3">
        Colecciones: <strong>Novedades</strong>
      </h3>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <Image
              src={novedad0}
              className="card-img-top"
              alt="..."
              priority={true}
            />
            <div className="card-body">
              <p className="card-text text-uppercase">Descubrí</p>
              <h3 className="text-uppercase">Novedades</h3>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {collections.map((collection) => {
              return (
                <div className="col" key={collection._id}>
                  <Image src={collection.img} alt="..." />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="more mt-3">
        <h6>Descubrí Mas</h6>
      </div>
    </div>
  );
};
