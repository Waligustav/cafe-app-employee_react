import React, { useEffect, useContext, useState } from "react";

import { HandleKurv } from "../Model/handleKurv";
import { PricePreView } from "../Components/PricePreView";
import { Beverage } from "../Components/Beverage";
import { Dessert } from "../Components/Dessert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal } from "../Modal";
import { PaymentModal } from "../Model/PaymentModal";
import { desserts } from '../Model/productLists';
import Timer from '../Timer';

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
          to=" "
          h1
          id="header-title"
          className="font-cursive"
          onClick={start}
        >
          Checkout
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
          <div id="lowest-menu">

            <div>
              <h4 className='other-title'>Kommentar</h4>
              <input type="text" placeholder="Vennligst havremelk i cappuccinoen"/>
            </div>

          <div>
                <h2 className="other-title">Bordnummer</h2>
                <select id="select-number">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
            </div>

          <div>
          <h2 className="other-title">Tid til levering</h2>
            <input id='time-to-delivery-input' type="text" placeholder="02:00"></input>
          </div>

          <div>
            <h2 className="other-title">Klikk for å bekrefte</h2>
            <button id="confirm-button">Bekreft</button>
          </div>


        </div>
      </div>
    </>
  );
};
export default Checkout;