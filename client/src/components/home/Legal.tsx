import React from "react";
import Image from "next/image";
import legalPayment from "../../assets/img/legal-payment.png";
import legalProtected from "../../assets/img/legal-protected.png";
import legalShipping from "../../assets/img/legal-shipping.png";
import { AiOutlineMail } from "react-icons/ai";

export const Legal = () => {
  return (
    <div id="home-legal" className="pb-5 pt-5">
      {/* options */}
      <div className="options pb-5 container">
        <ul>
          <li>
            <Image
              src={legalPayment}
              alt="payment"
              priority={true}
              style={{ width: "60px", height: "60px" }}
            />
            <h5 className="mt-3">Elegí como pagar</h5>
            <p className="mb-2">
              Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin
              tarjeta con Mercado Crédito.
            </p>
            <small>Cómo pagar tus compras</small>
          </li>
          <hr />
          <li>
            <Image
              src={legalShipping}
              alt="shipping"
              priority={true}
              style={{ width: "60px", height: "60px" }}
            />
            <h5 className="mt-3">Envío gratis desde $8.000</h5>
            <p className="mb-2">
              Solo por estar registrado en Mercado Libre tenés envíos gratis en
              miles de productos. Es un beneficio de Mercado Puntos..
            </p>
            <small>Conocé más sobre este beneficio</small>
          </li>
          <hr />
          <li>
            <Image
              src={legalProtected}
              alt="protected"
              priority={true}
              style={{ width: "60px", height: "60px" }}
            />
            <h5 className="mt-3">Seguridad, de principio a fin</h5>
            <p className="mb-2">
              ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no
              puedas hacer, porque estás siempre protegido.
            </p>
            <small>Cómo te protegemos</small>
          </li>
        </ul>
      </div>

      {/* buttons */}
      <div className="buttons container">
        <ul>
          <li>
            <h6>Botón de arrepentimiento</h6>
            <small>Cancelar una compra</small>
            <small>Cancelar una suscripción</small>
            <small>Cancelar un seguro o garantía</small>
          </li>

          <li>
            <h6>Conocé las normas que aplican cuando comprás</h6>
            <small>
              Ver contratos de adhesión - Ley N.º 24.240 de Defensa del
              Consumidor
            </small>
          </li>
        </ul>
      </div>

      <p className="text-center pt-5 email">
        <AiOutlineMail /> ayuda@mercadolibre.com.ar
      </p>
    </div>
  );
};
