import React, { setState, Component, useState } from 'react';
//import IndPlate from './IndPlate.js';

class Menumodal extends Component {

  constructor(props) {
    super(props);
    this.state = {
        completed: localStorage.getItem('completed') ? JSON.parse(localStorage.getItem('completed')) : [{key: 0, comment: 'none'}],
    }}

  componentDidUpdate(prevState, props) {
    if (localStorage.getItem('completed')) {
    var updatedcomplete = JSON.parse(localStorage.getItem('completed'));
    if (updatedcomplete.length !== this.state.completed.length){
      this.setState({
        completed: updatedcomplete,
      })
    }

  }}

  cleanplates = (e) => {
    if (window.confirm("Are you sure you want to clean your plates? This will remove all saved data.")) {
    localStorage.clear();

  }}


render() {

    return (
      <>
      <div className="modal">
      <div className="tutorial">
      <p>What's on your plate? <br/>  <br/> To-do lists aren't meant to live forever. Sticky notes are fleeting. These plates break for you. <br/> <br/>Plates are created using one of four levels of transience:</p>

      <div className="plateitem">
        <div className="buttons"><p>12</p></div>
            <span contentEditable = {true} suppressContentEditableWarning= {true}>
            This plate lasts for 12 hours.
            </span>
        </div>

        <div className="plateitem">
          <div className="buttons"><p>6</p></div>
              <span contentEditable = {true} suppressContentEditableWarning= {true}>
              This plate lasts for 6 hours.</span>
        </div>

        <div className="plateitem">
          <div className="buttons"><p>1</p></div>
              <span contentEditable = {true} suppressContentEditableWarning= {true}>
              This plate lasts for 1 hour.
              </span>
        </div>

        <div className="plateitem">
          <div className="buttons"><p>0</p></div>
              <span contentEditable = {true} suppressContentEditableWarning= {true}>
              This plate lasts until you switch to a new tab or application.
              </span>
        </div>

        <p>Plates are shelved in your browser's Local Storage only. They may occasionally be cleared by browser updates.</p>

        <p className="cleanplates" onClick={this.cleanplates.bind(this)}>Clean Plates</p>


      </div>

      <div className="finishedplates">
      <p>Completed Plates:</p>
      {
            this.state.completed.map((completed) =>
            <div key={completed.key}>
              <div className="plateitem">
                <div className="platebox">
                  <div className="plate">
                  </div>
                </div>
                    <span
                    style = {{color: '#c1e0ce'}}
                    type="text"
                    className={"platetext finished"}
                    contentEditable = {false}
                    suppressContentEditableWarning= {true}>
                    {completed.comment}
                    </span>
              </div>
            </div>

        )}
        </div>

    </div></>)

}
}

export default Menumodal;
