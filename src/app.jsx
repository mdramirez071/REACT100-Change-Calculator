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
      output: ""
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
    console.log(amountDue);
    amountReceived = this.state.amountReceived * 100;
    console.log(amountReceived);
    var changeDue = Math.ceil(amountReceived - amountDue)
    console.log(changeDue);

 //check if change is divisible by twenties
 if(changeDue > 1999)
 {
   console.log(changeDue);
   var twenties = Math.floor(changeDue/2000);
   console.log(twenties);
   //store the amount of twenties into an array then return that array index
   array.push(twenties);
 }
 else { array.push(0)};
 changeDue = changeDue%2000;
 //check if change is divisible by tens
 if(changeDue > 999)
 {
   console.log(changeDue);
   var tens = Math.floor(changeDue/1000);
   console.log(tens);
   //store the amount of tens into an array then return that array index
   array.push(tens);
 }
 else { array.push(0)}
 changeDue = changeDue%1000;
     //check if change is divisible by fives
     if(changeDue > 499)
     {
       console.log(changeDue);
       var fives = Math.floor(changeDue/500);
       console.log(fives);
      //store the amount of fives into an array then return that array index
      array.push(fives);
     }
     else { array.push(0)}
     changeDue = changeDue%500;
    //check if change is divisible by dollars
    if(changeDue > 99)
    {
      console.log(changeDue);
      var dollars = Math.floor(changeDue/100);
      console.log(dollars);
      //store the amount of dollars into an array then return that array index
      array.push(dollars);
    }
    else { array.push(0)}
    changeDue = changeDue%100;
      console.log(changeDue);
    //check if change is divisible by quarters
    if (changeDue > 24 | changeDue > 0)
    {
      var quarters = Math.floor(changeDue/25);
      //store the amount of quarters into an array then return that array index
      array.push(quarters);
    }
    else { array.push(0)}
    changeDue = changeDue%25;
    //check if change is divisible by dimes
    if (changeDue > 9)
    {
      //var dimes = Math.floor(changeDue-(dollars*100)-(quarters*100)/10); DONT USE! ONLY USE FOR TESTING!
      var dimes = Math.floor(changeDue/10);
      console.log(dimes);
      //store the amount of dimes into an array then return that array index
      array.push(dimes);
    }
    else { array.push(0)}
    changeDue = changeDue%10;
    // check if change is divisible by nickels
    if (changeDue > 4)
    {
      var nickels = Math.floor(changeDue/5);
      
      //store the amount of nickels into an array then return that array index
      array.push(nickels);
    }
    else { array.push(0)}
    changeDue = changeDue%5;
    // check if change is divisible by pennies
    if (changeDue >= 0)
    {
      var pennies = Math.floor(changeDue/1);
      changeDue = changeDue%1;
     //store the amount of pennies into an array then return that array index
     array.push(pennies);
    }    
    return array;
   }

   handleClick(e) {
    e.preventDefault(); //Stops the event at this point
    var result = this.calculate();
    console.log(result);
    let returnChange = this.state.amountReceived - this.state.amountDue;
    returnChange = returnChange.toFixed(2);
    this.setState(
      {
      twenties: result[0],
      tens: result[1],
      fives: result[2],
      ones: result[3],
      quarters: result[4],
      dimes: result[5],
      nickels: result[6],
      pennies: result[7],
      output: `The total change due is $${returnChange}`
    }
    )
    return result;
  }


  render() {
    return (  
      <div className='container'>
        <header><h1 className='text-light border-bottom'>Change Calculator
        </h1></header>
        <div className="row">
  <div className="col-sm-6">

  <div className="card">
  <div className="card-header">
    Enter Information
  </div>
  <div className="card-body">
    <h5 className="card-title"></h5>

    <label htmlFor="amountDue">How much is due?
  </label>
    <input type="number" value={this.state.amountDue} onChange={this.onChange} name="amountDue" className="form-control" id="amountDue" placeholder="Amount Due">
    </input> 

  <label htmlFor="amountReceived">How much was received?
  </label>
    <input type="number" value={this.state.amountReceived} onChange={this.onChange} name="amountReceived" className="form-control" id="amountReceived" placeholder="Amount Received">
    </input>

  </div>
  <div className="card-footer">
  <button className="btn btn-block btn-round btn-primary btn-outline-primary" name="calculate" id="calculate" onClick={this.handleClick}>Calculate</button>
</div>
 
</div>

</div>
  <div className="col-sm-6">
      <div className="card">
      <div className="card-body">
      <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded"><div className="alert alert-success">
  <strong>{this.state.output}</strong>
</div></div>

<div className="alert alert-danger">
  <strong>Danger! Incorrect Amount of Change!</strong> You should <a href="#" className="alert-link">Read This Message</a>.
</div>

      <div className="row w-100 h-50">
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Twenties
            <p>{this.state.twenties}</p>
            </div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Tens
            <p>{this.state.tens}</p></div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Fives
            <p>{this.state.fives}</p></div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Ones
            <p>{this.state.ones}</p></div>
            <div className="row w-100 h-50"></div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Quarters
            <p>{this.state.quarters}</p></div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Dimes
            <p>{this.state.dimes}</p></div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Nickels
            <p>{this.state.nickels}</p></div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Pennies
            <p>{this.state.pennies}</p></div>

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
