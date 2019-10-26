import React, { Component, useState } from 'react';
import './App.css';

class Buttons extends Component {

  constructor(props) {
        super(props)
        this.state = ({
           active: localStorage.getItem('active') ? localStorage.getItem('active') : 21600 && localStorage.setItem('active', 21600),
        });
    }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('active', (this.state.active))
  }


  render() {

  const activated = this.state.active;

    return (
        <div className="buttons mainbuttons">
        <p className = {this.state.active === 43200 ? 'activated' : ''} onClick={() => {this.setState({active: 43200})}} ref="12">12</p>
        <p className = {this.state.active === 21600 ? 'activated' : ''} onClick={() => {this.setState({active: 21600})}}  ref='6'>6</p>
        <p className = {this.state.active === 3600 ? 'activated' : ''} onClick={() => {this.setState({active: 3600})}}  ref='1'>1</p>
        <p className = {this.state.active === 'doom' ? 'activated' : ''} onClick={() => {this.setState({active: 'doom'})}} ref="X"><span role="img">0</span></p>
        </div>
      );
    }
  }

  export default Buttons;
