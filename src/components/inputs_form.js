import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Input = ({label, type, placeholder}) => {

  return(
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{label}</label>
      <input type={type} className="form-control" aria-describedby="emailHelp" placeholder={placeholder} />
    </div>
  );
};


export default Input;
