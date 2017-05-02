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
        <FormContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.content'));
