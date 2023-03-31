import React from "react"
import "../css/nav.css";
import act from "../images/act.svg";
import cert from "../images/cert.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <ul className="list">
        <li className="footer-item">Sustainability hub</li>
        <li className="footer-item">Our story </li>
        <li className="footer-item">Work with us</li>
        <li className="footer-item">Lick Pro Stockists</li>
        <li className="footer-item">HELP & FAQS</li>
        <li className="footer-item">Terms</li>
        <li className="footer-item">Privacy Help</li>
        <li className="footer-item">Shipping & returns</li>
      </ul>
      <div className="otherLogos">
        <img className="act" src={act} alt="act logo" />
        <img className="cert" src={cert} alt="certification logo" />
      </div>
    </div>
  );
}