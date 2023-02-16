import React from "react";
import Image from "next/image";
import truck from "../../assets/img/truck.png";
import starplus from "../../assets/img/starplus.png";
import dplus from "../../assets/img/dplus.png";

export const LevelUpgrade = () => {
  return (
    <div id="home-level-upgrade" className="mb-5 container">
      <div className="card ">
        <div className="card-header">
          <h2>Suscribite al nivel 6</h2>
          <span>
            $1.499 <small>/mes</small>
          </span>
        </div>
        <div className="card-body">
          <h6 className="card-title">
            Conseguí los mejores beneficios en Mercado Libre
          </h6>
          <ul>
            <li>
              <Image
                src={dplus}
                alt="Disney+ sin cargo"
                priority={true}
                style={{ width: "75px", height: "75px" }}
              />
              <p>Disney+ sin cargo</p>
            </li>
            <li>
              <Image
                src={starplus}
                alt="Star+ sin cargo"
                priority={true}
                style={{ width: "75px", height: "75px" }}
              />
              <p>Star+ sin cargo</p>
            </li>
            <li>
              <Image
                src={truck}
                alt="Envíos gratis y rápidos"
                priority={true}
                style={{ width: "75px", height: "75px" }}
              />
              <p>
                Envíos gratis y rápidos desde $ 8.000 y 45% OFF en envíos de
                menos de $ 8.000
              </p>
            </li>
          </ul>
          <hr />
          <button type="button" className="btn btn-primary btn-sm fw-bold p-2">
            Suscribete
          </button>
        </div>
      </div>
    </div>
  );
};
