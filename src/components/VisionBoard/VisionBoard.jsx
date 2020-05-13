import React from 'react';
import Day from '../Day/Day';
import styles from './VisionBoard.module.css';

const VisionBoard = (props) => (
  <div className={styles.VisionBoard}>
    {props.amounts.map((amount, idx) =>
      <Day
        amount={amount}
        nutrients={props.nutrients}
        dayIdx={idx}
        currentAmounts={idx === (props.amounts.length - 1)}
        handleNewDayClick={props.handleNewDayClick}
        key={idx}
      />
    )}
  </div>
);

export default VisionBoard;
