import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Input = (props) => (

  <div id="div_override">
    <label htmlFor={props.key} id="label_override">{props.placeholder}</label>
    <input
      type={props.type}
      id={props.key}
      className="form-control input_override" aria-describedby="emailHelp"
      value={props.content}
      onChange={props.controlFunc}
       />
  </div>
)

export default Input;
