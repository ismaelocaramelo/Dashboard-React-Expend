import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable} from "mobx"
import {observer} from "mobx-react"
import axios from 'axios'

import Input from './inputs_form';



class FormContainer extends Component{

  constructor(props) {
    super(props);

    observable(this.accountingProvider);
    this.accountingProviderItems = [];
    this.state = {
			name: '',
			email: '',
			companySize: '',
      accountingProvider: ''
		};

    axios
      .get('http://localhost:3000/accounting_platforms')
      .then(res => {
          this.accountingProviderItems = res.data.map(obj => {
            return `${obj.accountingProvider}`
          });
      });

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleAccountinProviderChange = this.handleAccountinProviderChange.bind(this);
		this.handleCompanySize = this.handleCompanySize.bind(this);
  }

  fireOnSelect() {
    if (typeof this.handleAccountinProviderChange === "function")
      this.accountinProviderChange(this.state.accountingProvider) /* solved! */
  }

  handleNameChange(e) {
  	this.setState({ name: e.target.value });
  }
  handleEmailChange(e) {
  	this.setState({ email: e.target.value });
  }
  accountinProviderChange(value) {
    this.setState({ accountingProvider: value });
  }
  handleAccountinProviderChange(e) {
    this.setState({ accountingProvider: e.target.value });
    this.fireOnSelect();
  }
  handleCompanySize(e) {
  	this.setState({ companySize: e.target.value });
  }


  handleFormSubmit(e) {
		e.preventDefault();

		const formData = {
			name: this.state.name,
			email: this.state.email,
			accountingProvider: this.state.accountingProvider,
			companySize: this.state.companySize
		};

    console.log(formData);

    axios
      .post('http://localhost:3000/sign_up', {formData})
      .then(res => {
        console.log(res, 'res');
      });
  }

  render(){
    return (
        <form className="container" onSubmit={this.handleFormSubmit}>
          <Input
            label="Name"
            type="text"
            placeholder="Enter name"
            content={this.state.name}
            controlFunc={this.handleNameChange}
            />
          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            content={this.state.email}
            controlFunc={this.handleEmailChange}
            />
          <Input
            label="Company Size"
            type="number"
            placeholder="Enter company size"
            content={this.state.companySize}
            controlFunc={this.handleCompanySize}
            />
          <div className="form-group">
            <label htmlFor="exampleSelect1">Account Platform</label>
            <select
              className="form-control"
              id="exampleSelect1"
              onChange={(e) => this.accountinProviderChange(e.target.value)}>
              {this.accountingProviderItems.map(option =>
                <option key={option.toUpperCase()}>{option}</option>
              )}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
  }
}

export default FormContainer;
