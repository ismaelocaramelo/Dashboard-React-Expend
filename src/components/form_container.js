import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios'

import Input from './inputs_form';

class FormContainer extends Component{

  constructor(props) {
    super(props);

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
          this.setState({accountingProvider: 'emptyOption'})
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
    console.log(this.state.accountingProvider);

    if (this.state.accountingProvider !== 'emptyOption') {
      const formData = {
  			name: this.state.name,
  			email: this.state.email,
  			accountingProvider: this.state.accountingProvider,
  			companySize: this.state.companySize
  		};

      axios
        .post('http://localhost:3000/sign_up', {formData})
        .then(res => {
          console.log(res, 'res');
        });
    }else{
      alert('Please select an Accounting Provider');
    }

  }

  render(){
    return (
      <div className="form-container center-block form-horizontal">
        <form className="container" onSubmit={this.handleFormSubmit}>
          <div id="input_group_override" className="form-group col-sm-12">
            <Input
              regex="[a-zA-Z0-9]{3,96}[ ]?[a-zA-Z0-9]{3,100}"
              key="nameid"
              type="text"
              placeholder="Name"
              content={this.state.name}
              controlFunc={this.handleNameChange}
              />
            <Input
              key="emailid"
              type="email"
              placeholder="Email"
              content={this.state.email}
              controlFunc={this.handleEmailChange}
              />
            <div id="div_override">
              <label id="label_override">Accounting Platform used:</label>
              <select
                onChange={(e) => this.accountinProviderChange(e.target.value)}>
                <option key="emptyOption">Select one</option>
                {this.accountingProviderItems.map(option =>
                  <option key={option.toUpperCase()}>{option}</option>
                )}
              </select>
            </div>
            <Input
              key="companySizeid"
              type="number"
              placeholder="Company Size"
              content={this.state.companySize}
              controlFunc={this.handleCompanySize}
              />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}


export default FormContainer;
