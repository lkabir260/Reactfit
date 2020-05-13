import React from 'react';
import { Link } from 'react-router-dom';
import VisionBoard from '../../components/VisionBoard/VisionBoard';
import AddLog from '../../components/AddLog/AddLog';
import Fasting from '../../components/Fasting/Fasting';
import NewDayButton from '../../components/NewDayButton/NewDayButton';
import './StatPage.css';

const StatPage = (props) => {

  return (
    <div className="App">
     
        <div className="flex-h align-flex-end">
        <VisionBoard
            nutrients={props.nutrients}
            amounts={props.amounts}
            handleNutClick={props.handleNutClick}
        />
        <div className='App-controls'></div>
        <div className="flex-h">
        <AddLog 
                nutrients={props.nutrients} 
                selNutIdx={props.selNutIdx}
                handleNutrientSelection={props.handleNutrientSelection}
        />
        <Fasting /> 
        <Link className='btn btn-default StatPage-link-margin' to='/stats'>Macro Status</Link>
        <Link className='btn btn-default StatPage-link-margin' to='/FoodLog'>Food Log</Link>
        <Link className='btn btn-default StatPage-link-margin' to='/FastLog'>Fasting Tracker</Link>
        <NewDayButton handleNewDayButton={props.handleNewDayClick}/>         
        
        </div>
  </div>
  <footer>{(props.addMacs ? `You Won in ${props.addMacs} Amounts!` : 'Good Luck!')}
  </footer>
  </div>
  );

};

export default StatPage;
