import React from "react";
import Image from "next/image";
import creditCard from "../../assets/img/credit-card.png";
import debitCard from "../../assets/img/debit-card.png";
import mercadoCredits from "../../assets/img/mercado-creditsv2.png";
import paymentAgreement from "../../assets/img/payment-agreement.png";
import viewMore from "../../assets/img/view-more.png";

export const PaymentMethods = () => {
  return (
    <div id="home-payment-methods">
      <div className="mt-5 mb-5 container">
        <div className="options">
          <ul>
            <li className="op1">
              <Image
                src={creditCard}
                alt="Tarjeta de credito"
                priority={true}
                style={{ width: "65px", height: "auto" }}
              />
              <div>
                <h6>Tarjeta de crédito</h6>
                <p>Ver promociones bancarias</p>
              </div>
            </li>
            <li className="op2">
              <Image
                src={debitCard}
                alt="Tarjeta de debito"
                priority={true}
                style={{ width: "65px", height: "auto" }}
              />
              <div>
                <h6>Tarjeta de débito</h6>
                <p>Ver mpas</p>
              </div>
            </li>
            <li className="op3">
              <Image
                src={mercadoCredits}
                alt="Cuotas sin tarjeta"
                priority={true}
                style={{ width: "65px", height: "auto" }}
              />
              <div>
                <h6>Cuotas sin tarjeta</h6>
                <p>Conocé Mercado Crédito</p>
              </div>
            </li>
            <li className="op4">
              <Image
                src={paymentAgreement}
                alt="Efectivo"
                priority={true}
                style={{ width: "65px", height: "auto" }}
              />
              <div>
                <h6>Efectivo</h6>
                <p>Ver Más</p>
              </div>
            </li>
            <li>
              <Image
                src={viewMore}
                alt="mas opciones"
                priority={true}
                style={{ width: "65px", height: "auto" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
