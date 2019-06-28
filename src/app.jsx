import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // amount-due: "",
      // amount-received: "",
      // output: ""
    };
  }



  render() {
    return (
      <div className='container'>
      <form className="form-horizontal">
        <h3>Change Calculator</h3>
        <div className="tagline"></div>
      <div className="form-group">
        <label htmlFor="amount-due">How much is Due?</label>
        <input type="number" value={this.state.amountDue} onChange={this.onChange} name="amount-due" className="form-control" id="amount-due" placeholder="Amount Due"></input>
        
        <label htmlFor="amount-received">How much was Received?</label>
        <input type="number" value={this.state.rate} onChange={this.onChange} name="amount-received" className="form-control" id="amount-received" placeholder="Amount Received"></input>

        <button name="calculate" onClick={this.handleClick}>Calculate</button>
        </div>
  
      <div name="output" value={this.state.output} onChange={this.onChange} className="form-group" id="output"><h3>{this.state.output}</h3></div>
      </form>
      
      {/* your JSX goes here */}
      </div>
    )
  }
}

export default App;
