import React from "react";
import Image from "next/image";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import banner4 from "../../assets/img/banner4.png";
import banner5 from "../../assets/img/banner5.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Banner = () => {
  const banners = [
    {
      _id: 1,
      img: banner1,
      title: "Ofertas de vuelta al cole",
    },
    {
      _id: 2,
      img: banner2,
      title: "Especial San Valentín",
    },
    {
      _id: 3,
      img: banner3,
      title: "Especial Camping",
    },
    {
      _id: 4,
      img: banner4,
      title: "Todo en herramientas",
    },
    {
      _id: 5,
      img: banner5,
      title: "Mantené tus ambientes frescos",
    },
  ];

  return (
    <div id="home-banner">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        interval={4500}
      >
        {banners.map((banner) => {
          return (
            <div key={banner._id}>
              <Image
                src={banner.img}
                alt={banner.title}
                priority={true}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
