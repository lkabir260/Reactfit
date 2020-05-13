import React from 'react';
import styles from './AddLog.module.css'

const AddLog = (props) => (
  <div className={styles.AddLog}>
    {props.nutrients.map((nutrient,idx) =>
      <button 
      key={nutrient}
      className={styles.button}
      style={{
        backgroundColor: props.selNutIdx === idx ? 'white' : nutrient,
        borderColor: nutrient
      }}
      onClick={()=>props.handleNutrientSelection(idx) }
      
      />
    )}
  </div>
);

export default AddLog;