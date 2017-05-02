import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/form_container';
import HeaderDashboard from './components/header_dashboard';

class App extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <HeaderDashboard />
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <h4>Get started for free</h4>
        </div>
        <div className="col-md-4"></div>

        <FormContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.content'));
