import React, { useState } from 'react';

import './ToggleMenu.css'

const ToggleMenu = () => {

  const [isActive, setIsActive] = useState(false)

  const toogleActive = () => {
    setIsActive(!isActive)
  }
  
    return (
      <div className="main-sandwich" onClick={toogleActive.bind(this)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
      </div>
    );
}

export default ToggleMenu