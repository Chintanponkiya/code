import React, { useState } from "react";
import img1 from "../../img/Alogo.svg";
import Logout from "../logout/Logout";
import Siedbar from "../siedbar/Siedbar";
import ModalData from "../../data/ModalData";

export default function Zeronsec() {
  const [shoLogo, setShowLogo] = useState(false);
  return (
    <>
      <div className="container">
        <div className="Bord-navbar">
          <nav className="nav">
            <div className="logo">
              <img src={img1} alt="/" width={130} />
              <h4>Dashbord</h4>
            </div>
            <div className="box" onClick={() => setShowLogo(true)}>
              Ekasha Admin
            </div>
            {shoLogo && <Logout setShowLogo={setShowLogo} />}
          </nav>
        </div>
        <div className="main--1">
          <div className="sidebar">
            <Siedbar />
          </div>
          <div className="conten">
            <ModalData />
          </div>
        </div>
      </div>
    </>
  );
}
