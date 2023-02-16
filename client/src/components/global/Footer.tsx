import React from "react";

export const Footer = () => {
  return (
    <footer id="global-footer">
      <div className="information pb-4 pt-5">
        <div className="container">
          <ul>
            <span className="fw-bold">Acerca de</span>
            <li className="mt-3">Mercado Libre</li>
            <li>Investor relations</li>
            <li>Tendencias</li>
            <li>Sustentabilidad</li>
          </ul>
          <ul>
            <span className="fw-bold">Otros sitios</span>
            <li className="mt-3">Developers</li>
            <li>Mercado Pago</li>
            <li>Mercado Shops</li>
            <li>Mercado Envíos</li>
            <li>Mercado Ads</li>
          </ul>
          <ul>
            <span className="fw-bold">Ayuda</span>

            <li className="mt-3">Comprar</li>
            <li>Vender</li>
            <li>Resolución de problemas</li>
            <li>Centro de seguridad</li>
          </ul>
          <ul>
            <span className="fw-bold"> Redes sociales</span>
            <li className="mt-3">Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
          <ul>
            <span className="fw-bold"> Mi cuenta</span>

            <li className="mt-3">Ingresá</li>
            <li>Vender</li>
          </ul>
          <ul>
            <span className="fw-bold"> Mercado Puntos</span>

            <li className="mt-3">Nivel 6</li>
            <li>Disney+</li>
            <li>Star+</li>
            <li>HBO MAX</li>
            <li>Paramount+</li>
          </ul>
        </div>
      </div>

      <div className="about-us pt-3 pb-3">
        <div className="container">
          <ul>
            <li>Trabajá con nosotros</li>
            <li>Terminos y condiciones</li>
            <li>Como cuidamos tu privacidad</li>
            <li>Accesibilidad</li>
            <li>Ayuda</li>
            <li>Defensa del Consumidor</li>
          </ul>
          <p>1999-2023 MercadoLibre S.R.L</p>
          <p>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
        </div>
      </div>
    </footer>
  );
};
