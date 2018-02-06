import React from 'react';
import ReactDOM from 'react-dom';
import NumericInput from '../temp/react-numeric';

class App extends React.Component {
  constructor() {
    super();

    this.handleNumInputChange = this.handleNumInputChange.bind(this);
  }

  handleNumInputChange(value, e) {

  }

  render() {
    return (
      <div>
        <NumericInput
          value="12725577"
          onChange={this.handleNumInputChange}
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#app'));
