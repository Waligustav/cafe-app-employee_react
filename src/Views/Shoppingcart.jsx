import React, { useEffect, useContext, useState } from "react";

import { HandleKurv } from "../Model/handleKurv";
import { PricePreView } from "../Components/PricePreView";
import { Beverage } from "../Components/Beverage";
import { Dessert } from "../Components/Dessert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal } from "../Modal";
import { PaymentModal } from "../Model/PaymentModal";
import { desserts } from '../Model/productLists';

export const Shoppingcart2 = (props) => {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleKurv = useContext(HandleKurv);
  let audio = new Audio("/click.mp4");

  const [isOpen, setIsOpen] = useState(false);

  const start = () => {
    audio.play();
  };

  useEffect(() => {
    calcTotalPrice();
  }, [handleKurv.products]);

  const calcTotalPrice = () => {
    let total = 0;
    Object.keys(handleKurv.products).forEach((product) => {
      Object.keys(handleKurv.products[product]).forEach((size) => {
        const amount = handleKurv.products[product][size].antal;
        const aPrice = handleKurv.products[product][size].price;
        total += amount * aPrice;
      });
    });
    setTotalPrice(total);
  };

  const removeFromBasket = (productName, sizeName) => {
    const newProducts = {
      ...handleKurv.products,
      [productName]: {
        ...handleKurv.products[productName],
        [sizeName]: {
          antal: handleKurv.products[productName][sizeName]["antal"] - 1,
          price: handleKurv.products[productName][sizeName]["price"],
        },
      },
    };
    handleKurv.setProducts(newProducts);
  };

  const addToBasket = (productName, sizeName) => {
    const newProducts = {
      ...handleKurv.products,
      [productName]: {
        ...handleKurv.products[productName],
        [sizeName]: {
          antal: handleKurv.products[productName][sizeName]["antal"] + 1,
          price: handleKurv.products[productName][sizeName]["price"],
        },
      },
    };
    handleKurv.setProducts(newProducts);
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
          <div className="shopping-cart-buttons-container">
            <span
              onClick={() => {
                removeFromBasket(product, size);
              }}
              className={"button minus-button"}
            >
              -
            </span>
            <span className="number-of-items">{handleKurv.products[product][size]["antal"]}</span>
            <span
              onClick={() => {
                addToBasket(product, size);
              }}
              className={"button plus-button"}
            >
              +
            </span>
          </div>
        </div>
      ))
    // product.map((size) => {
    //   console.log(size);
    //   console.log(product);
    // });
  );

  //   <li key={`${order.id}-${order.size}`}>{<OrderCard data={order} />}</li>

  return (
    <>
      <header id="header-container">
        <div>
          {show ? (
            <div className="back-drop" onClick={closeModalHandler}></div>
          ) : null}
        </div>

        <Link
          to="/Shoppingcart/Shoppingcart"
          h1
          id="header-title"
          className="font-cursive"
          onClick={start}
        >
          Handlekurv
        </Link>

        <Link to="/MainMenu" onClick={start}>
          <img id="back-arrow-icon" src="../assets/back-arrow.png" alt="Back button"/>
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

      

      <div className="content-background">
        <div id='all-shopping-cart-outputs'>
          {orderList}
        </div>
        <Link to='/Checkout/:area?'>
          {totalPrice > 0 &&
            <div id="payment-ready-container">  
              <button className="pay-now">
                <strong>Send ordre til checkout</strong></button>
            </div>
            }
        </Link>
        
      </div>

      
    </>
  );
};
export default Shoppingcart2;