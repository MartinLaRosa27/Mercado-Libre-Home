import React from "react";
import producto1 from "../../assets/img/producto1.png";
import producto2 from "../../assets/img/producto2.png";
import producto3 from "../../assets/img/producto3.png";
import producto4 from "../../assets/img/producto4.png";
import producto5 from "../../assets/img/producto5.png";
import producto6 from "../../assets/img/producto6.png";
import producto7 from "../../assets/img/producto7.png";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillThunderbolt, AiOutlineHeart } from "react-icons/ai";

export const Offers = () => {
  const products = [
    {
      _id: 1,
      img: producto1,
      name: "Celular Samsung Galaxy A13 128gb + 4gb Ram Pls Lcd Negro",
      price: 77999,
      freeShipping: true,
      discount: 5,
      full: true,
    },
    {
      _id: 2,
      img: producto2,
      name: "Lavarropas automático Enova ATH-EWMF-B7-TDF blanco 7kg 240 V",
      price: 179999,
      discount: 54,
      freeShipping: false,
      full: false,
    },
    {
      _id: 3,
      img: producto3,
      name: "Smart Tv Noblex Dr32x7000pi Led Hd 32'' Con Android Tv",
      price: 47999,
      discount: null,
      freeShipping: true,
      full: false,
    },
    {
      _id: 4,
      img: producto4,
      name: "Memoria RAM Fury Beast DDR4 gamer color negro 8GB 1 Kingston KF432C16BB/8",
      price: 18999,
      discount: 24,
      freeShipping: true,
      full: false,
    },
    {
      _id: 5,
      img: producto5,
      name: 'Monitor gamer Samsung F24T35 led 24" azul y gris oscuro 100V/240V',
      price: 69999,
      discount: 15,
      freeShipping: true,
      full: true,
    },
    {
      _id: 6,
      img: producto6,
      name: "Mochila Porta Notebook Laptop Acolchada Reforzada Gran Capacidad Ejecutiva Urbana Gym Deportiva",
      price: 8729,
      discount: 6,
      freeShipping: true,
      full: false,
    },
    {
      _id: 7,
      img: producto7,
      name: "Bicicleta Mtb Totem By Topmega R29 21v Disco,susp. V/colores",
      price: 129358.99,
      discount: 40,
      freeShipping: true,
      full: false,
    },
  ];

  const responsive = {
    v1: {
      breakpoint: { max: 4000, min: 1400 },
      items: 5,
    },
    v2: {
      breakpoint: { max: 1400, min: 1024 },
      items: 4,
    },
    v3: {
      breakpoint: { max: 1200, min: 991 },
      items: 3,
    },
    v4: {
      breakpoint: { max: 991, min: 540 },
      items: 2,
    },
    v5: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="home-offers" className="mb-5">
      <div className="container pb-3">
        <h3 className="mb-4">
          Ofertas<small> Ver todas</small>
        </h3>

        <Carousel responsive={responsive}>
          {products.map((product, i) => {
            return (
              <div
                className="item pb-4"
                style={{
                  width: "230px",
                  height: "425px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                key={product._id}
              >
                <p className="wish m-4">
                  <AiOutlineHeart />
                </p>
                <Image
                  src={product.img}
                  alt={product.name}
                  priority={true}
                  style={{
                    maxWidth: "250px",
                    maxHeight: "220px",
                  }}
                />
                <hr />
                {product.discount && (
                  <small className="container">
                    <del>$ {product.price.toFixed(2)}</del>
                  </small>
                )}

                {product.discount ? (
                  <h4 className="container">
                    ${" "}
                    {(
                      product.price -
                      (product.price * product.discount) / 100
                    ).toFixed(2)}
                    <small className="text-uppercase">
                      {product.discount}% off
                    </small>
                  </h4>
                ) : (
                  <h4 className="container">$ {product.price} </h4>
                )}

                {product.freeShipping && (
                  <small className="free-shippng container">
                    Envío gratis{" "}
                    {product.full && (
                      <small>
                        <AiFillThunderbolt />
                        <strong className="fst-italic">FULL</strong>
                      </small>
                    )}
                  </small>
                )}

                <p className="container mt-1">{product.name}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
