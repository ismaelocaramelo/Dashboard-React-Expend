import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Input from './inputs_form';
import AccountPlatform from './account_platform';


class FormContainer extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.state = true;
  }

  handleSubmit(){

  }

  render(){
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <Input label="Name" type="text" placeholder="Enter name"/>
        <Input label="Email" type="email" placeholder="Enter email"/>
        <Input label="Company Size" type="number" placeholder="Enter company size"/>
        <AccountPlatform label='AccountPlatform' />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default FormContainer;
