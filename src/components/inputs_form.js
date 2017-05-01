import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Input = (props) => (

  <div className="form-group">
    <label
      htmlFor="exampleInputEmail1">{props.label}
    </label>
    <input
      type={props.type}
      className="form-control" aria-describedby="emailHelp"
      placeholder={props.placeholder}
      value={props.content}
      onChange={props.controlFunc}
       />
  </div>
)


export default Input;
