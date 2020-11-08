import React, { useContext, useState } from 'react';
import '../../Styles/styles.css';
import { VarmDrikke } from './Components/VarmDrikke';
import { KallDrikke } from './Components/KallDrikke';
import { Desserts } from './Components/Dessert';
import { MenuSelection } from './Components/MenuSelection';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PricePreView } from '../../Components/PricePreView';
import { HandleKurv } from '../../Model/handleKurv';
import { render } from '@testing-library/react';
import { Modal } from '../../Modal';

const MainMenu = () => {
  let totalPrice = 1;
  let audio = new Audio("/click.mp4")

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  const start = () => {
    audio.play()
  }

  return (
    <>
    <header id='header-container'>
        <div>
          {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
        </div>

        <Link to=' ' h1 id='header-title' className='font-cursive' onClick={start}>
          Produkter
        </Link>
        <Link to='/FrontPage/FrontPage' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' />
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' onClick={() => {setShow(true); start()}}/>
      </header>
      
      <div className="content-background">
        <VarmDrikke />;
        <KallDrikke />;
        <Desserts />;
        <PricePreView totalPrice={totalPrice} />
      </div>
    </>
  );
};

export default MainMenu;




/*
blabla
          const App = (props) => {
            const [buttonClicked, changeComponent] = useState(0);

    return (
        <div>
            <EnkelKnapp
                trykketPaa={buttonClicked}
                change={()=>{changeComponent(0)}}
            />
            <EnkelKnapp
                trykketPaa={buttonClicked}
                change={()=>{changeComponent(1)}}
            />
            <EnkelKnapp
                trykketPaa={buttonClicked}
                change={()=>{changeComponent(2)}}
            />

            {buttonClicked === 0 &&
                <h1>varme drikker</h1>}

            {buttonClicked === 1 &&
                <h1>kalde drikker</h1>
            }

            {buttonClicked === 2 &&
                <h1>desserter</h1>
            }
        <div/>
    );
}

const MenuChangerButton = (props) => {

    return (
        <button 
            onCick={props.change}
            className="menu-changer-button">
                {props.buttonText}
        </button>
    );
}
*/
