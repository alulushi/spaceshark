import React from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>What would you like to do?</h3>
        <Link to="/buy"> BUY </Link>
        <Link to="/sell"> SELL </Link>
      </header>
    </div>
  );
}

class Sell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {heldspaces: []};
    this.getOwned = this.getOwned.bind(this);
  }

  getOwned(){
    var startdate = new Date('December 17, 1995 03:24:00');
    var enddate = new Date('December 17, 1995 03:24:00');
    var tradeable = false;
    let tmpheldspaces = [{num:1, startdate:startdate, enddate:enddate, tradeable:tradeable}, {num:2, startdate:startdate, enddate:enddate, tradeable:tradeable}]
    this.setState({ heldspaces: tmpheldspaces });
    console.log(this.state.heldspaces);
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h3>What would you like to sell?</h3>
          <select>
            <option>parking spot</option>
            <option>room reservation</option>
          </select>
          <button onClick={this.getOwned}> show </button>
          <div>
            <table>
                <tr>
                  <td>Number</td>
                  <td>Start Date</td>
                  <td>End Date</td>
                  <td>Listed?</td>
                </tr>
              {this.state.heldspaces.map((d) => 
                <tr key={d.num}>
                  <td>{d.num}</td>
                  <td>{d.startdate.getHours().toString() + ':00 ' + d.startdate.getMonth().toString() + '/' + d.startdate.getDate().toString() + '/' + d.startdate.getFullYear().toString()}</td>
                  <td>{d.enddate.getHours().toString() + ':00 ' +d.enddate.getMonth().toString() + '/' + d.enddate.getDate().toString() + '/' + d.enddate.getFullYear().toString()}</td>
                  <td>{d.tradeable.toString()}</td>
                </tr>
              )}
            </table>
          </div>
        </header>
      </div>
    );
  }
}

function Home(){
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
        <h1>
          SPACESHARK
        </h1>
        <h3>
          The booking system for capitalists.
        </h3>
        <h3>
          Harness the power of the free market
        </h3>
        <Link to="/login"> START </Link>
      </header>
    </div>
  );    
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/sell">
          <Sell/>
        </Route>
        <Route path="/buy">
          <Sell/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
