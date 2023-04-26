import React from "react";
import Bg from "../../images/bg-card-back.png";

interface CardPreviewBackProps {
  cardInfo: any;
}

function CardPreviewBack({ cardInfo }: CardPreviewBackProps): JSX.Element {
  console.log(cardInfo.cvc);
  return (
    <div className="card-back-face">
      <img src={Bg} alt="" className="card-back-face__img" />
      <p className="text">{cardInfo.cvc.padEnd(3, "0")}</p>
    </div>
  );
}

export default CardPreviewBack;
