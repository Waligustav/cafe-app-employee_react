import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const menuSectionNames = ['Varm drikke', 'Kald drikke', 'Dessert'];
  let totalPrice = 1;

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [menuSection, setMenuSection] = useState(menuSectionNames[0]); // menuSection blir til "Varm drikke", "Kald drikke" eller "Dessert".
  const [menuItems, setMenuItems] = useState([]);
  let { area } = useParams();

  const getArea = () => {
    switch (area) {
      case 'VarmDrikke':
        return <VarmDrikke />;
      case 'KallDrikke':
        return <KallDrikke />;
      case 'Desserts':
        return <Desserts />;
      default:
        return <VarmDrikke />;
    }
  };



  return (
    <>
    <header id='header-container'>
        <div>
          {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
        </div>
          <img id="coffee-header" src="../assets/icons/coffee-header.png"></img>
        <Link to='/FrontPage/FrontPage'>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' />
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' onClick={() => setShow(true)}/>

      </header>
      
      

      <div className="menu-background texture-background">
        <MenuSelection />
        {getArea()}
        <div className="space-maker"></div>
        <PricePreView totalPrice={totalPrice} />
      </div>
    </>
  );
};

export default MainMenu;

