import React, { useEffect, useContext, useState } from "react";

import { HandleKurv } from "../Model/handleKurv";
import { PricePreView } from "../Components/PricePreView";
import { Beverage } from "../Components/Beverage";
import { Dessert } from "../Components/Dessert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal } from "../Modal";
import { PaymentModal } from "../Model/PaymentModal";
import { desserts } from '../Model/productLists';

export const Checkout = (props) => {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleKurv = useContext(HandleKurv);
  let audio = new Audio("/click.mp4");

  const [isOpen, setIsOpen] = useState(false);

  const start = () => {
    audio.play();
  };

  const orderList = Object.keys(handleKurv.products).map(
    (product) =>
      Object.keys(handleKurv.products[product]).map((size) => (
        <div className="shopping-cart-output-container">
          <div className="shopping-cart-output">
            Du har bestilt {handleKurv.products[product][size]["antal"]}{" "}
            {product} ({size}) <br/> Pris per:{" "}
            {handleKurv.products[product][size]["price"]} kr,-
          </div>
        </div>
      ))
  );


  return (
    <>
      <header id="header-container">
        <div>
          {show ? (
            <div className="back-drop" onClick={closeModalHandler}></div>
          ) : null}
        </div>

        <Link
          to="/FrontPage/FrontPage"
          h1
          id="header-title"
          className="font-cursive"
          onClick={start}
        >
          Handlekurv
        </Link>

        <Link to="/MainMenu" onClick={start}>
          <img id="back-arrow-icon" src="../assets/back-arrow.png" />
        </Link>

        <Modal show={show} close={closeModalHandler} />
        <img
          id="hamburger-icon"
          src="../assets/hamburger-icon.png"
          onClick={() => {
            setShow(true);
            start();
          }}
        />
      </header>

      <div className="content-background">
        <div id='all-shopping-cart-outputs'>
          {orderList}
        </div>
        <Link to='/Checkout/:area?'>
          {totalPrice > 0 &&
            <div id="payment-ready-container">  
              <button className="pay-now">
                <strong>Fullfør</strong></button> 
            </div>
            }
        </Link>
      </div>
    </>
  );
};
export default Checkout;