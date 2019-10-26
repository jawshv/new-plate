import React, { Component } from 'react';
import './App.css';
import PlatesContain from './PlatesContain.js';
import Buttons from './Buttons.js';
import Menumodal from './Menumodal.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    show: false
  }
  }


  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


render() {
  return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="container">
          <Buttons/>
          <PlatesContain/>
          <div className = {this.state.show ? 'modalalive' : 'modalbye'}>
          <Menumodal/></div>
          <div className="info buttons">
          <p onClick= {this.state.show ? this.hideModal : this.showModal}>i</p>
          </div>
        </div>
      </div>
    );
}
}

export default App;
