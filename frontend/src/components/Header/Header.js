import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

import ToggleMenu from '../ToggleMenu/ToggleMenu'

import logo from '../../assets/img/logo-buscape.png'

const Header = () => {

    return (
      <header className="main-header">
          <div className="header-content">
              <Link to="/">
                <img src={logo} alt="Buscapé" className="logo"/>
              </Link>
              <ToggleMenu />
          </div>
      </header>
    );
}

export default Header