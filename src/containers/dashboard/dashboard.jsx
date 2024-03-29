import React, { Component } from 'react';

import BoxStatus from './boxstatus'
import Systems from './systems'
import ShipStatus from './shipstatus'

class Dashboard extends Component {

  render() {
    return (

      <div className=" container dashboard-section">
        <div  className="row dashboard-size">
          <div className="col-12 col-sm-12 col-md-6 dashboard-left">
            <div className="boxstatus-container white-container">
              <BoxStatus />
            </div>
            <div className="ship-container white-container">
              <ShipStatus />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 dashboard-right">
            <div className="systems-container white-container">
              <Systems />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Dashboard;
