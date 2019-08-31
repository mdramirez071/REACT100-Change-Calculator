import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: "",
      amountReceived: "",
      calculate: "",
      twenties: "",
      tens: "",
      fives: "",
      ones: "",
      quarters: "",
      dimes: "",
      nickels: "",
      pennies: "",
      output: "",
    };
    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this) 
  }
  
  onChange(e){ 
    this.setState({ [e.target.name] : e.target.value })
}  

  calculate(amountDue, amountReceived) {
    let array = [];
    amountDue = this.state.amountDue * 100;
    amountReceived = this.state.amountReceived * 100;
    var changeDue = Math.ceil(amountReceived - amountDue)

  if(changeDue > 1999){
    var twenties = Math.floor(changeDue/2000);
    array.push(twenties);
  }
  else { array.push(0) };

  changeDue = changeDue%2000;
  if(changeDue > 999){
    var tens = Math.floor(changeDue/1000);
    array.push(tens);
  }
  else { array.push(0) }
  changeDue = changeDue%1000;

  if(changeDue > 499){
  var fives = Math.floor(changeDue/500);
  array.push(fives);
  }
  else { array.push(0) }
  changeDue = changeDue%500;
  
  if(changeDue > 99){
  var dollars = Math.floor(changeDue/100);
  array.push(dollars);
  }
  else { array.push(0) }
  changeDue = changeDue%100;

  if (changeDue > 24 | changeDue > 0){
    var quarters = Math.floor(changeDue/25);
    array.push(quarters);
  }
  else { array.push(0) }
  changeDue = changeDue%25;

  if (changeDue > 9){
  var dimes = Math.floor(changeDue/10);
  array.push(dimes);
  }
  else { array.push(0) }
  changeDue = changeDue%10;

  if (changeDue > 4){
  var nickels = Math.floor(changeDue/5);
  array.push(nickels);
  }
  else { array.push(0) }
  changeDue = changeDue%5;

  if (changeDue >= 0){
  var pennies = Math.floor(changeDue/1);
  changeDue = changeDue%1;
  array.push(pennies);
  }
  else { array.push(0) }
  return array;
  }

  handleClick(e) {
  //Prevents the Reset to Default State
  e.preventDefault();
  var result = this.calculate();
  
  let returnChange = this.state.amountReceived - this.state.amountDue;
  returnChange = returnChange.toFixed(2);
  
  if(returnChange < 0){
  this.setState({
    alert: "card text-center alert alert-danger rounded",
    twenties: result[0],
    tens: result[1],
    fives: result[2],
    ones: result[3],
    quarters: result[4],
    dimes: result[5],
    nickels: result[6],
    pennies: result[7],
    output: `Please Insert More Money...`
    })
  }
  else {
    {
      this.setState({
      alert: "card text-center alert alert-success rounded",
      twenties: result[0],
      tens: result[1],
      fives: result[2],
      ones: result[3],
      quarters: result[4],
      dimes: result[5],
      nickels: result[6],
      pennies: result[7],
      output: `The total change due is $${returnChange}`
        })
      }
    }
    return result;
  }

  render() {
    return (  
      <div className='container'>
      <header><h1 className='text-light border-bottom'>Change Calculator</h1></header>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
            <div className="card-header">Enter Information</div>
            <div className="card-body"><h5 className="card-title"></h5>
            <label htmlFor="amountDue">How much is due?</label>
            <input type="number" value={this.state.amountDue} onChange={this.onChange} name="amountDue" className="form-control" id="amountDue" placeholder="Amount Due"></input>
            <label htmlFor="amountReceived">How much was received?</label>
            <input type="number" value={this.state.amountReceived} onChange={this.onChange} name="amountReceived" className="form-control" id="amountReceived" placeholder="Amount Received"></input>
            </div>
            <div className="card-footer">
            <button className="btn btn-block btn-round btn-primary btn-outline-primary" name="calculate" id="calculate" onClick={this.handleClick}>Calculate</button>
            </div> 
            </div>
          </div>
            <div className="col-sm-6">
              <div className="card">
              <div className="card-body">
              <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">
              <div className={this.state.alert}>
              <strong>{this.state.output}</strong>
              </div>
                <div className="row w-100 h-50">
                    <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Twenties
                    <p className="change">{this.state.twenties}</p>
                    </div>
                    <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Tens
                    <p className="change">{this.state.tens}</p>
                    </div>
                    <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Fives
                    <p className="change">{this.state.fives}</p>
                    </div>
                    <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Ones
                    <p className="change">{this.state.ones}</p>
                    </div>
                    <div className="row w-100 h-50"></div>
                    <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Quarters
                    <p className="change">{this.state.quarters}</p>
                    </div>
                    <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Dimes
                    <p className="change">{this.state.dimes}</p>
                    </div>
                    <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Nickels
                    <p className="change">{this.state.nickels}</p>
                    </div>
                    <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Pennies
                    <p className="change">{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
