import React from "react";
import creciendo from "../../assets/img/shop-creciendo.png";
import atma from "../../assets/img/shop-atma.png";
import citroen from "../../assets/img/shop-citroen.png";
import fravega from "../../assets/img/shop-fravega.png";
import hp from "../../assets/img/shop-hp.png";
import lg from "../../assets/img/shop-lg.png";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const BestShops = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
    },
  };

  const shops = [
    {
      _id: 1,
      img: creciendo,
      name: "Creciendo",
    },
    {
      _id: 2,
      img: atma,
      name: "ATMA",
    },
    {
      _id: 3,
      img: citroen,
      name: "Citroen",
    },
    {
      _id: 4,
      img: fravega,
      name: "Fravega",
    },
    {
      _id: 5,
      img: hp,
      name: "HP",
    },
    {
      _id: 6,
      img: lg,
      name: "LG",
    },
  ];

  return (
    <div id="home-best-shops" className="mb-5">
      <div className="container pb-3">
        <h3 className="mb-4">Las mejores tiendas te esperan</h3>

        <Carousel responsive={responsive}>
          {shops.map((shop) => {
            return (
              <div
                className="item pb-4"
                style={{
                  width: "250px",
                  height: "320px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                key={shop._id}
              >
                <Image src={shop.img} alt={shop.name} priority={true} />
                <p>Ver tienda</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
