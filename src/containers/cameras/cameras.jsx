import React, { Component } from 'react';

import CameraBox from './camera_box'

class Cameras extends Component {

  render() {
    return (
      <div className="camera-section">

        <div className="">
          <div className="col-12 col-sm-12 col-md-6 camera-split">
            <CameraBox name={"Camera 1"} id={"Camera1"} livevideo ={"https://pulsarapi.siriusinsight.io/camera/Camera1/2019-06-19/Camera%201_01_20190619120122.mp4"}/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 camera-split">
            <CameraBox name={"Camera 2"} id={"Camera2"} livevideo={"https://pulsarapi.siriusinsight.io/camera/Camera2/2019-06-19/Camera2_01_20190619150923.mp4"}/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 camera-split">
            <CameraBox name={"Camera 3"} id={"Camera3"} livevideo={"https://pulsarapi.siriusinsight.io/camera/Camera3/2019-06-19/Camera1_01_20190619150611.mp4"}/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 camera-split">
            <CameraBox name={"Camera 4"} id={"Camera4"} livevideo={"https://pulsarapi.siriusinsight.io/camera/Camera4/2019-06-19/Camera1_01_20190619150813.mp4"}/>
          </div>
        </div>
      </div>

    );
  }
}

export default Cameras;
