import React from 'react';
import { Link } from 'react-router-dom'

import { HeaderStyle } from './HeaderStyle'
import ButtonMenu from '../ButtonMenu/ButtonMenu'

import logo from '../../assets/img/logo-buscape.png'

const Header = () => {
  return (
    <HeaderStyle>
        <div className="header-content">
            <Link to="/">
              <img src={logo} alt="Buscapé" className="logo"/>
            </Link>
            <ButtonMenu
                onClick=""
            />
        </div>
    </HeaderStyle>
  );
}

export default Header
