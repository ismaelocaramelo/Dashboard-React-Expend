import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AccountPlatform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accountPlatformItems: []
    };

    axios
      .get('http://localhost:3000/accounting_platforms')
      .then(res => {
        console.log(res);
          const accountPlatformItems = res.data.map(obj => {
            return `${obj.accountingProvider}`
          });
          this.setState({accountPlatformItems})
      });
  }



  render(){
    return(
      <div className="form-group">
        <label htmlFor="exampleSelect1">{this.props.label}</label>
        <select className="form-control" id="exampleSelect1">
          {this.state.accountPlatformItems.map(option =>
            <option key={option.toUpperCase()}>{option}</option>
          )}
        </select>
      </div>
    );
  }
}

// <!--{this.state.accountPlatformItems}-->
export default AccountPlatform;
