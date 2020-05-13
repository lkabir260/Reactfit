import React from 'react';
import Goals from '../Goals/Goals';
import NutrientLog from '../NutrientLog/NutrientLog';
import GoalsButton from '../GoalsButton/GoalsButton';

const Day = (props) => (
  <div className='flex-h'>
    <div>{props.dayIdx + 1}</div>
    <NutrientLog
      nutrients={props.nutrients}
      max={props.amount.max}
      currentAmount={props.currentAmount}
      handleNutClick={props.handleNutClick}
    />
    {props.currentAmount ? <GoalsButton /> : 
    <Goals goal={props.amount.score} />}
  </div>
);

export default Day;