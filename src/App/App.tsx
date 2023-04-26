import React, { useState } from "react";
import "../css/Main.scss";
import CardDetailsForm from "../components/CardDetailsForm/CardDetailsForm";
import CardPreviewFront from "../components/CardPreviewFront/CardPreviewFront";
import CardPreviewBack from "../components/CardPreviewBack/CardPreviewBack";

function App(): JSX.Element {
  const [cardInfo, setCardInfo] = useState({
    cardNum: "",
    cvc: "",
    expDay: "",
    expMonth: "",
    fullName: "",
  });

  const getFormValsOnChange = (values: any) => {
    setCardInfo(values);
  };

  return (
    <div className="app">
      <div className="app-left">
        <CardPreviewFront cardInfo={cardInfo} />
        <CardPreviewBack cardInfo={cardInfo} />
      </div>
      <div className="app-right">
        <CardDetailsForm getFormValsOnChange={getFormValsOnChange} />
      </div>
    </div>
  );
}

export default App;
