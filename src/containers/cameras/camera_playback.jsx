import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class CameraPlayback extends Component {

  render () {
    const style = {
      backgroundImage: `url(${this.props.file})`
    }

    return (
      <div className="camera-playback">
        <div className="camera-file-info">{this.props.file}</div>
          { this.props.filetype == 'mp4' ?
            <div className="video-playback">
              <ReactPlayer
                className='react-player '
                url={this.props.file}
                height="100%"
                width="100%"
              />
            </div>
            : <div className="image-playback" style={style}>
              <img src={this.props.file} ></img>
            </div>
          }
      </div>
    )
  }
}

export default CameraPlayback;
