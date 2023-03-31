import React from "react";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import "../css/confirmation.css";

export const Confirmation = () => { 
  return (
    <div className="main">
      <div className="confirmation">
        <Icon path={mdiCheckCircleOutline} size={5} />
        <h1 className="confTitle"> Order confirmation</h1>
        <p className="confP">Your order has been succesfully placed.</p>
        <p className="confP">Paid using saved card ending in 8172.</p>
        <p className="confP">
          Your paint will be delivered in 3-5 working days.
        </p>
      </div>
    </div>
  );
}