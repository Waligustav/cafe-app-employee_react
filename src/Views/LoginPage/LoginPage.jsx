import React, { useEffect, useContext, useState } from 'react';

import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../Styles/styles.css';
import { VarmDrikke } from '../Menu/Components/VarmDrikke';
import { KallDrikke } from '../Menu/Components/KallDrikke';
import { Desserts } from '../Menu/Components/Dessert';
import { PricePreView } from '../../Components/PricePreView';
import { HandleKurv } from '../../Model/handleKurv';
import { Modal } from '../../Modal';

export const LoginPage = () => {
  let audio = new Audio("/click.mp4")

  // Disse to er states her i MainMenu (se "useState"). Inne i useState(her) er det lagt utgangspunkt-verdier.
  // Gjeldende verdi ligger alltid i første variabel i arrayet, og endres når funksjonen (andre del av arrayet) kalles.
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

        <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive' onClick={start}>
          Kafé HK
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' alt="hamburger menu icon" src='../assets/hamburger-icon.png' onClick={() => { setShow(true); start(); }}/>
      </header>
      
      
            <div id="login-container">
                  <p id="login-font">Tast inn ansattnummer og passord</p>
                  <div>
                      <label id="login-label-1"><strong>Brukernavn</strong></label>
                      <input className="login-textbox" type="text" placeholder="Brukernavn"></input>
                  </div>
                  <div>
                      <label id="login-label-2"><strong>Passord&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
                      <input className="login-textbox" type="text" placeholder="Passord"></input>
                  </div>

                  <Link to='/MainMenu/:area?' onClick={start}>
                      <input type="button" value="Logg inn" id="login-btn"></input>
                  </Link>
          </div>

    </>
  );
};

export default LoginPage; 
    
    
    
    