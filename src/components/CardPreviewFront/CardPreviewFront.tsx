import React from "react";
import Bg from "../../images/bg-card-front.png";
import CardLogo from "../../images/card-logo.svg";

interface CardPreviewFrontProps {
  cardInfo: any;
}
function CardPreviewFront({ cardInfo }: CardPreviewFrontProps): JSX.Element {
  console.log(cardInfo);
  return (
    <div className="card-front-face">
      <img src={Bg} alt="Card" className="card-front-face__img" />
      <img src={CardLogo} alt="Card Logo" className="card-front-face__logo" />
      <p className="text card-front-face__card-number">
        {cardInfo.cardNum.padEnd(16, "0").replace(/(.{4})/g, "$1 ")}
      </p>
      <p className="text card-front-face__cardholder-name">
        {cardInfo.fullName || "jane appleseed"}
      </p>
      <p className="text card-front-face__exp-date">
        {`${cardInfo.expMonth.padStart(2, "0")}/${cardInfo.expDay.padStart(
          2,
          "0"
        )}`}
      </p>
    </div>
  );
}

export default CardPreviewFront;
