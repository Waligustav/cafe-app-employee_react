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
           <div className='other-cart-container'>
            <h4 className='cart-title'>Kommentar til bestillingen?</h4>
            <input type="text" placeholder="Vennligst havremelk i cappuccinoen"/>
          </div>

          <div id="lowest-menu">
            
            <div id="table-nr-div">
              <p id="table-nr">Bord</p>
              <div className="lowest-menu-box" id="table-nr">1</div>
            </div>

            <Timer id="timer"></Timer>

            <div id="execute-div">
              <p id="execute">Fullfør</p>
              <div className="lowest-menu-box">1</div>
            </div>

          </div>
        
        </div>
       
      </div>
      
    </>
  );
};
export default Checkout;