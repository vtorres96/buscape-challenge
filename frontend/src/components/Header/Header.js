import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

import ButtonMenu from '../ButtonMenu/ButtonMenu'

import logo from '../../assets/img/logo-buscape.png'

const Header = () => {
    return (
      <header className="main-header">
          <div className="header-content">
              <Link to="/">
                <img src={logo} alt="Buscapé" className="logo"/>
              </Link>
              <ButtonMenu
                  onClick=""
              />
          </div>
      </header>
    );
}

export default Header