import React, { useEffect, useContext, useState } from "react";

import { HandleKurv } from "../Model/handleKurv";
import { PricePreView } from "../Components/PricePreView";
import { Beverage } from "../Components/Beverage";
import { Dessert } from "../Components/Dessert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal } from "../Modal";
import { PaymentModal } from "../Model/PaymentModal";
import { desserts } from '../Model/productLists';
import Timer from "../Timer";

export const OrderComplete = (props) => {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleKurv = useContext(HandleKurv);
  let audio = new Audio("/click.mp4");

  const [isOpen, setIsOpen] = useState(false);

  const start = () => {
    audio.play();
  };


  return (
    <>
      <header id="header-container">
        <div>
          {show ? (
            <div className="back-drop" onClick={closeModalHandler}></div>
          ) : null}
        </div>

        <Link
          to=" "
          h1
          id="header-title"
          className="font-cursive"
          onClick={start}
        >
          Order Complete
        </Link>

        <Link to="/MainMenu" onClick={start}>
          <img id="back-arrow-icon" src="../assets/back-arrow.png" alt="Back icon" />
        </Link>

        <Modal show={show} close={closeModalHandler} />
        <img
          id="hamburger-icon"
          src="../assets/hamburger-icon.png"
          alt="Menu icon"
          onClick={() => {
            setShow(true);
            start();
          }}
        />
      </header>

      <div id="countdown"><Timer></Timer></div>

    
    </>
  );
};
export default OrderComplete;