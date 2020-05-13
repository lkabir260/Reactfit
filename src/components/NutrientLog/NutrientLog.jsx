import React from 'react';
import Nutrient from '../Nutrient/Nutrient';
import './NutrientLog.css';

const NutrientLog = (props) => (
  <div className='NutrientLog'>
    Net Carbs
    <Nutrient currentAmount={props.currentAmount} nutrient={props.nutrients[props.max[0]]}  handleNutClick={() => props.handleNutClick(0)} />
    Proteins
    <Nutrient currentAmount={props.currentAmount} nutrient={props.nutrients[props.max[1]]} handleNutClick={() => props.handleNutClick(1)}/>
    Fats
    <Nutrient currentAmount={props.currentAmount} nutrient={props.nutrients[props.max[2]]} handleNutClick={() => props.handleNutClick(2)}/>
    Thursday
    <Nutrient currentAmount={props.currentAmount} nutrient={props.nutrients[props.max[3]]} handleNutClick={() => props.handleNutClick(3)}/>
  </div>
);

export default NutrientLog;