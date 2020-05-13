  
import React, { Component } from 'react';
import './App.css';
import StatPage from '../../pages/StatPage/StatPage';
import { Route, Switch } from 'react-router-dom';
import FastLog from '../FastLog/FastLog';
import FoodLog from '../FoodLog/FoodLog';




const nutrients = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selNutIdx: 0,
      amounts: [this.getNewAmount()],
      max: this.genMax()
    };
  this.handleNutrientSelection = this.handleNutrientSelection.bind(this);
  this.handleFoodLog = this.handleFoodLog.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }
  getNewAmount() {
    return {
      max: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genMax() {
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * 4));
  }

  getAddMacs() {
    let lastAmount = this.state.amounts.length - 1;
    return this.state.amounts[lastAmount].score.perfect === 4 ? lastAmount + 1 : 0;
  }

  handleNutrientSelection = (nutrientIdx) => {
    this.setState({selNutIdx: nutrientIdx});
  }

  handleNewDayClick = () => {
    this.setState(this.getInitialState());
  }

  handleNutClick = (NutIdx) => {
    let currentAmountIdx = this.state.amounts.length - 1;
    let amountsCopy = [...this.state.amounts];
    let amountCopy = {...amountsCopy[currentAmountIdx]};
    let codeCopy = [...amountCopy.code];

    codeCopy[NutIdx] = this.state.selColorIdx;

    amountCopy.code = codeCopy;


    amountsCopy[currentAmountIdx] = amountCopy;

    this.setState({
        amounts: amountsCopy
    });
  }

  handleFoodLog = (e) => {
    this.setState({
      description: e.target.value
    })

  }

  onSubmit(){
    e.preventDefault();

    const exercise = {
      description: this.state.description,
    };
  }

  render() {
    let addMacs = this.getAddMacs();
    return (
      <div className="App">
      
        {/* <button onClick={() => this.setState((state) => {
          return {
            selNutIdx: ++state.selNutIdx % 3
          };
        })}>
          Macros
        </button> */}
        Selected nutrient: {nutrients[this.state.selNutIdx]}
        <header className="App-header-footer">Fitness App</header>
        <switch>
        <Route exact path='/' render={() =>
        <StatPage
          addMacs={addMacs}
          nutrients={nutrients}
          selNutIdx={this.state.selNutIdx}
          amounts={this.state.amounts}
          handleNutrientSelection={this.handleNutrientSelection}
          handleNewDayClick={this.handleNewDayClick}
        />
        } />
          <Route exact path='/FastLog' render={props => 
            <FastLog handleFoodLog= {this.handleFoodLog} {onSubmit} {...props} />
          } />
          <Route exact path='/FoodLog' render={props => 
            <FoodLog {...props} />
          } />
         <Route exact path='/StatPage' render={props => 
            <StatPage {...props} /> 
          } />
        </switch>

      </div>
    );
  }


export default App;