import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './HeaderStyle.css'

import ButtonMenu from '../ButtonMenu/ButtonMenu'

import logo from '../../assets/img/logo-buscape.png'
export default class Header extends Component {
  render(){
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
}