import React, {Component} from 'react';

class Input extends Component{

  constructor(props) {
    super(props);

    this.opts = {};
    if (props.minLength) {
      this.opts['minLength'] = props.minLength;
    }
    if (props.maxLength) {
      this.opts['maxLength'] = props.maxLength ;
    }
    if (props.regex) {
      this.opts['pattern'] = props.regex ;
    }
  }

  render(){
    return (<div id="div_override">
      <label htmlFor={this.props.key} id="label_override">{this.props.placeholder}</label>
      <input
        type={this.props.type}
        {...this.opts}
        id={this.props.key}
        className="form-control input_override" aria-describedby="emailHelp"
        value={this.props.content}
        onChange={this.props.controlFunc}
        required
         />
    </div>)
  }
}

export default Input;
