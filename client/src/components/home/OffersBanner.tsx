import React from "react";
import logo from "../../assets/img/D_NQ_814693-MLA53559372171_022023-OO.png";
import Image from "next/image";

export const OffersBanner = () => {
  return (
    <div id="home-offers-banner" className="mb-5 container">
      <div className="text-center">
        <div className="row">
          <div className="col-8">
            <Image src={logo} alt={"ml-logo"} priority={true} />
          </div>
          <div className="col-4">
            <h3 className="text-uppercase mb-3">Ofertas y hasta 12 cuotas</h3>
            <h6>Ver más {">"}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
