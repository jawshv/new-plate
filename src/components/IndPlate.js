import React, {useState, Component } from 'react';
import style from './indPlate.css';

//const [id, setNote] = useLocalStorage('let go', 'Time');

function IndPlate() {
/*
var special = ['zero', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelvth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
var deca = ['twent', 'thirt', 'fourt', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

function stringifyNumber(n) {
    if (n < 20) return special[n];
    if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
    return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
}


const num = (stringifyNumber(x));


return (

  <div className="plateitem">
    <div className="platebox">
      <div className="plate">
      </div>
    </div>
        <span type="text"
        placeholder= {"This is your " + num + " Plate."} className="platetext" id="1" contentEditable/>
  </div>
);*/
  /*  function useLocalStorage(key, initialValue) {
      // State to store our value
      // Pass initial state function to useState so logic is only executed once
      const [storedValue, setStoredValue] = useState(() => {
        try {
          // Get from local storage by key
          const item = window.localStorage.getItem(key);
          // Parse stored json or if none return initialValue
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
          // If error also return initialValue
          console.log(error);
          return initialValue;
        }
      });

      const setValue = value => {
        try {
          // Allow value to be a function so we have same API as useState
          const valueToStore = value instanceof Function ? value(storedValue) : value;
          // Save state
          setStoredValue(valueToStore);
          // Save to local storage
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
          // A more advanced implementation would handle the error case
          console.log(error);
        }
      };
      return [storedValue, setValue];
  }*/
};


export default IndPlate;
