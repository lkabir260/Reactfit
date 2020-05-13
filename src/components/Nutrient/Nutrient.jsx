import React from 'react';
import styles from './GuessPeg.module.css';

const Nutrient = (props) => (
  <div 
  className={styles.peg}
  style={{
  backgroundColor: props.nutrient,
  border: props.nutrient ? `1px solid ${props.nutrient}`: '1px dashed grey',
  cursor: props.currentAmount && 'pointer',
}}
  onClick={props.currentAmount ? props.handleNutClick : null}  
  />
);

export default Nutrient;