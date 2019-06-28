import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: "",
      amountReceived: "",
      calculate: "",
      output: ""
    };
    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this) 
  }
  
  onChange(e){ 
    this.setState({ [e.target.name] : e.target.value })
}  

  handleClick(e) {
    e.preventDefault(); //Stops the event at this point
    var result = this.calculate();
    console.log(result);
    this.setState(
      {output : `Your Monthly Payment Amount is: ${result}`}
    )
    return result;
  }

  calculate(amountDue, amountReceived) {
    
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
   changeDue = changeDue%2000;
   console.log(changeDue);
//store the amount of twenties into an array then return that array index
 }

 //check if change is divisible by tens
 if(changeDue > 999)
 {
   console.log(changeDue);
   var tens = Math.floor(changeDue/1000);
   console.log(tens);
   changeDue = changeDue%1000;
   console.log(changDue);
   //store the amount of tens into an array then return that array index
 }
     //check if change is divisible by fives
     if(changeDue > 499)
     {
       console.log(changeDue);
       var dollars = Math.floor(changeDue/500);
       console.log(dollars);
       changeDue = changeDue%500;
       console.log(changeDue);
      //store the amount of fives into an array then return that array index
     }

    //check if change is divisible by dollars
    if(changeDue > 99)
    {
      console.log(changeDue);
      var dollars = Math.floor(changeDue/100);
      console.log(dollars);
      changeDue = changeDue%100;
      console.log(changeDue);
      //store the amount of dollars into an array then return that array index
    }
    //check if change is divisible by quarters
    if (changeDue > 24)
    {
      var quarters = Math.floor(changeDue/25);
      changeDue = changeDue%25;
      console.log(changeDue);
      //store the amount of quarters into an array then return that array index
    }
    //check if change is divisible by dimes
    if (changeDue > 9 | changeDue > 0)
    {
      //var dimes = Math.floor(changeDue-(dollars*100)-(quarters*100)/10); DONT USE! ONLY USE FOR TESTING!
      var dimes = Math.floor(changeDue/10);
      console.log(changeDue);
      changeDue = changeDue%10;
      //store the amount of dimes into an array then return that array index
    }
    // check if change is divisible by nickels
    if (changeDue > 4 | changeDue > 0)
    {
      var nickels = Math.floor(changeDue/5);
      changeDue = changeDue%5;
      //store the amount of nickels into an array then return that array index
    }
    // check if change is divisible by pennies
    if (changeDue > 0)
    {
      var pennies = Math.floor(changeDue/1);
      changeDue = changeDue%1;
     //store the amount of pennies into an array then return that array index
    }    

    return changeDue;
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
      <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">The total change due is $98.94</div>
      <div className="row w-100 h-50">
    <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Twenties</div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Tens</div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Fives</div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Ones</div>
            <div className="row w-100 h-50"></div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Quarters</div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Dimes</div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Nickels</div>
            <div className="card mx-3 my-2 px-2 py-4 text-center col-sm bg-light rounded">Pennies</div>

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
