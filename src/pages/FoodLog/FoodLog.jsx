import React from 'react';
import { Link } from 'react-router-dom';

const FoodLog = (props) => {
  return (
    <div>
      <Link to='/'>Add Food Log</Link>
      <h1>FoodLog</h1>   
      
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }


export default FoodLog;