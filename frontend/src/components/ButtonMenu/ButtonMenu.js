import React, { Component } from 'react';

import { Button } from './ButtonMenuStyle'

export default class ButtonMenu extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <Button onClick={this.toggleHidden}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
      </Button>
    );
  }
}