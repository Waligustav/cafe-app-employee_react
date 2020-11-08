import React, { useState } from 'react';
import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
import Shoppingcart from './Shoppingcart';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal } from '../Modal';
import Expander from '../Components/Expander';

export const OrderHistory = () => {

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  let audio = new Audio("/click.mp4")

  const [isOpen, setIsOpen] = useState(false);

  const start = () => {
    audio.play()
  }

    return(

        <>

<header id='header-container'>
        <div>
          {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
        </div>

        <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive' onClick={start}>
          Ordrehistorikk
        </Link>
        <Link to='/MainMenu' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' alt='Back icon'/>
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' alt='Hamburger icon' onClick={() => {setShow(true); start()}}/>

      </header>

     <div className='content-background'>
        <Expander title='8. november 2020. Bord nummer 3.' icon="shopping-cart.png">
          <div className='expander-text shopping-cart-output'>
            2 filterkaffe (liten) for kroner 28 per stk. <br/>
            1 kanelbolle for kroner 46. <br/><br/>
            Totalpris: 102 kroner.
          </div>
        </Expander>
        <Expander title='8. november 2020. Bord nummer 1.' icon="shopping-cart.png">
          <div className='expander-text shopping-cart-output'>
            1 cappucino (stor) for kroner 46. <br/>
            1 croissant for kroner 38. <br/><br/>
            Totalpris: 84 kroner.
          </div>
        </Expander>
        <Expander title='7. november 2020. Bord nummer 4.' icon="shopping-cart.png">
          <div className='expander-text shopping-cart-output'>
            2 filterkaffe (liten) for kroner 28 per stk. <br/>
            1 kanelbolle for kroner 46. <br/><br/>
            Totalpris: 102 kroner.
          </div>
        </Expander>
        <Expander title='7. november 2020. Bord nummer 5.' icon="shopping-cart.png">
          <div className='expander-text shopping-cart-output'>
            1 cappucino (stor) for kroner 46. <br/>
            1 croissant for kroner 38. <br/><br/>
            Totalpris: 84 kroner.
          </div>
        </Expander>
        <Expander title='7. november 2020. Bord nummer 9.' icon="shopping-cart.png">
          <div className='expander-text shopping-cart-output'>
            2 filterkaffe (liten) for kroner 28 per stk. <br/>
            1 kanelbolle for kroner 46. <br/><br/>
            Totalpris: 102 kroner.
          </div>
        </Expander>
        
     </div>
      
    
        </>
    )
}
export default OrderHistory;