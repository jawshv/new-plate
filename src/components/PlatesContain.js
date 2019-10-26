import React, { setState, Component, useState } from 'react';

class platesContain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Plates: localStorage.getItem('Plates') ? JSON.parse(localStorage.getItem('Plates')) : [{key: 0, time: 'false', comment: '', finished: false}],
      completed: localStorage.getItem('completed') ? JSON.parse(localStorage.getItem('completed')) : '',
      handleFinshed: this.handleFinshed.bind(this),
      nowtime: Math.floor(Date.now() / 1000),
      color: '',
    };
  };


  componentDidMount(state, props) {
    this.interval = setInterval(() => this.setState({
      nowtime: Math.floor(Date.now() / 1000),
    }), 1000);
    localStorage.setItem('maxcount', 0);
    window.addEventListener("blur", this.onwindowBlur);
  }

//Plate Focused State
onBlur = () => {
    this.setState({ focused: false })
  };

onFocus = () => {
    this.setState({ focused: true })
  };

//Create New Plate Button
  handleNew = (event, state) => {
    var newkey = parseInt(localStorage.getItem('maxcount')) + 1;
    this.setState({
      Plates: [
        ...this.state.Plates,
        {key: newkey, time: 'false', comment: '', finished: false},
      ]});
  window.scrollTo(0,document.body.scrollHeight);
    console.log('make new????');
}

//Create New Plate Enter
handleKeyDown = (event, state) => {

      if (event.KeyCode === 77) {
        event.preventDefault();
      }

      if (event.keyCode === 13) {
        event.preventDefault();
        this.setState({ focused: false })
        var getcount = parseInt(localStorage.getItem('maxcount'));
      var newkey = parseInt(localStorage.getItem('maxcount')) + 1;
        this.setState({
          Plates: [
            ...this.state.Plates,
            {key: newkey, time: 'false', comment: '', finished: false},
          ]})
    }
};

//Edit Plate
onScriptChange(event) {
   this.setState({scriptString: event.target.value});
};


//Clear doomed plates
onwindowBlur = () => {
  var doomedplate = this.state.Plates.filter(m =>
  m.time === 'doom' ? false : true);
  localStorage.setItem('Plates', JSON.stringify(doomedplate))
  console.log('storage:', doomedplate, 'state:', this.state.Plates);
    this.setState({
      Plates: doomedplate,
    })
}

update = (e, id, props) => {
    var newplate = this.state.Plates.slice();
    var currentcontent = e.target.textContent;

    var keepid = e.target.dataset.newid;
    var keeptime = e.target.dataset.newtime;
    var timezone =
    keeptime === 'false' ? (parseInt(this.state.nowtime) + parseInt(localStorage.getItem('active'))):
    isNaN(keeptime) ? 'doom':
    keeptime;

    var keepkey = parseInt(e.target.dataset.newkey);

    newplate[keepid] = {key: keepkey, time: timezone, comment: currentcontent, finished: false};
    this.setState({
      Plates: newplate
    })
}

//finish plate
handleFinshed = (e, id) => {
  var doneplate = this.state.Plates.slice()
  var keepid = e.target.dataset.newid;
  if (doneplate[keepid].time === 'doom') {
  doneplate[keepid] = {key: doneplate[keepid].key, time: doneplate[keepid].time, comment: doneplate[keepid].comment, finished: true}
  this.setState({
    completed: [
      ...this.state.completed,
      doneplate[keepid]
    ]}, () =>
    localStorage.setItem('completed', JSON.stringify(this.state.completed))
  )

  this.setState({Plates: (doneplate)}, () =>
      localStorage.setItem('Plates', JSON.stringify(this.state.Plates))
)}
  else if (doneplate[keepid].comment) {
  if (window.confirm("Did you finish \"" + doneplate[keepid].comment + "\"?" )) {
    doneplate[keepid] = {key: doneplate[keepid].key, time: doneplate[keepid].time, comment: doneplate[keepid].comment, finished: true}
    this.setState({
      completed: [
        ...this.state.completed,
        doneplate[keepid]
      ]}, () =>
      localStorage.setItem('completed', JSON.stringify(this.state.completed))
    )

    this.setState({Plates: (doneplate)}, () =>
        localStorage.setItem('Plates', JSON.stringify(this.state.Plates))
  )

} else {}}
}

//update page to localStorage
componentDidUpdate(prevState, props) {
  var lengths = Object.keys(this.state.Plates);
  var maxlengths = Math.max(...lengths);
  if (maxlengths > localStorage.getItem('maxcount')){
  localStorage.setItem('maxcount', maxlengths)}

  var updatedplate = this.state.Plates.filter(x =>
  isNaN(x.time) ? true:
  (x.time - this.state.nowtime > 0) ? true : false);
  //x.time !== 'false' ?

  if (updatedplate.length !== this.state.Plates.length){
    localStorage.setItem('Plates', JSON.stringify(updatedplate))
    this.setState({
      Plates: updatedplate,
    })
  }
};

componentWillUnmount() {
  clearInterval(this.interval);
  window.removeEventListener("blur", this.onwindowBlur)
}

render() {

  var special = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelvth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
  var deca = ['twent', 'thirt', 'fourt', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

  function stringifyNumber(n) {
      if (n < 20) return special[n];
      if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
      return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
  };

  function timeNumber(a, b) {
    var timeleft = a - b;
    var h = Math.floor(timeleft/3600);
    var m = Math.floor(((timeleft/3600) - h)*60);
    var s = Math.floor(((((timeleft/3600) - h)*60)- m)*60);
    return h +':'+ m +':'+ s;
    // < (e) => this.handleFinshed(e, Plates.key)
  }

  return (

      <div className="page">
      <div className="plateitem">
        <div className="platebox float">
          <div className="plate new" onClick={this.handleNew}>
          +
          </div>
        </div>

      </div>

      <div className="theplates">

    {
          this.state.Plates.map((Plates, id) =>


          <div key={Plates.key}>

            <div className="plateitem">
              <div className="platebox">

                <div className="plate" data-newid={id} onClick={Plates.finished === false ? this.handleFinshed.bind(this) : ''}>
                </div>
              </div>
                  <span
                  style = {{color: (Plates.finished) ? '#c1e0ce' :
                  (Plates.time - this.state.nowtime < 2000) ? 'rgba('+(Math.pow(Plates.time, 0.07)-2)+',0,0)' : ''}}
                  type="text"
                  placeholder= {"This is your "
                  + stringifyNumber(Plates.key)
                  + " Plate."}
                  onFocus={this.onFocus}
                  data-newkey = {Plates.key}
                  data-newtime = {Plates.time}
                  data-newid = {id}
                  onBlur={this.update.bind(this)}
                  className={"platetext " + (Plates.finished ? "finished" : "")}
                  onKeyDown={this.handleKeyDown}
                  contentEditable={Plates.finished ? false : true}
                  suppressContentEditableWarning= {true}>
                  {Plates.comment}
                  </span>
                  <span className="timeleft">
                  { (Plates.finished === true) ? '🙌' :
                    (Plates.time === 'doom') ? '💥' :
                    (Plates.time === 'false') ? '' :
                    Plates.time ? timeNumber(Plates.time, this.state.nowtime) : ''}
                  </span>

            </div>
          </div>

      )}
        </div>
        </div>
    )}}

export default platesContain;
