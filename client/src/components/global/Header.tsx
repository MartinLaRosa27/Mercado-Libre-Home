import React from "react";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import simpleLogo from "../../assets/img/simple-logo.png";
import disneyCombo from "../../assets/img/disney-combo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <header id="global-header" className="pt-3">
      <div className="container">
        <div className="logo" onClick={() => handleClick()}>
          <Image
            src={logo}
            alt="Mercado Libre Argentina"
            title="Mercado Libre Argentina"
            className="main-logo"
            priority={true}
          />
          <Image
            src={simpleLogo}
            alt="Mercado Libre Argentina"
            title="Mercado Libre Argentina"
            className="simple-logo"
            priority={true}
          />
        </div>

        <div className="search-bar">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar productos, marcas y más..."
            />
            <span className="input-group-text">
              <AiOutlineSearch />
            </span>
          </div>
        </div>

        <div className="disney-combo">
          <Image
            src={disneyCombo}
            alt="Promoción nivel 6"
            title="¡Suscribite al nivel 6 con beneficios exclusivos!"
            priority={true}
          />
        </div>
        
      </div>

     
    </header>
  );
};
