import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import FormContainer from './components/form_container'

class App extends Component{
  constructor(props) {
    super(props);
    // this.state = true;
  }

  render(){
    return (
      <div>
        <FormContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
