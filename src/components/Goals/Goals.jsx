import React from 'react';

const Goals = ({ goal }) => {
  let goals = ('P'.repeat(goal.perfect) + 'A'.repeat(goal.almost) +
  'I'.repeat(4 - goal.perfect - goal.almost)).split('');
  return (
  <div>
    {goals.map((goal, idx) => <div key={idx}>{goal}</div>)}
  </div>
  );
}

export default Goals;




