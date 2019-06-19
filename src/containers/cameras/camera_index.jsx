import React, {Component} from 'react';
import DatePicker from "react-datepicker";

import CameraDataCard from './camera_data_card';

//import data from './dummy_data'
import moment from 'moment';


class CameraIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({ startDate: date }, () => {
      this.fetchData()
    });
  }
  convertDate(date) {
    const d = moment(date).format()
    return d.slice(0, 10).replace(/-/g, '/');
  }

  fetchData() {
    console.log(this.convertDate(this.state.startDate))
    const url = "http://217.138.134.182:3006/"
    const query = this.props.id + '/' + this.convertDate(this.state.startDate) + '/';
    console.log(url+query)
    const request = fetch(url+query)
      .then(response=> response.json())
      .then((data) => {
        this.setState({
          data: data,
        })
        console.log(this.state.data)
        console.log(this.state.data[1].slice(27,30))
        //console.log(('http://217.138.134.182:3006/'+ this.props.id + '/' + this.convertDate(this.state.startDate) + '/' +this.state.data[1]).duration)
      })
  }


  render () {
    return (
      <div className="camera-index">
        <div className="camera-datepicker-container">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="camera-list-container of-scroll">
          {this.state.data.map((camera_card, index) => {
            let style = index%2 == 0 ? "camera-image-card card-odd" : "camera-image-card"
            return (
              <CameraDataCard
                key={camera_card}
                style={style}
                index={index}
                timestamp={camera_card.slice(12,25)}
                type={camera_card.slice(27,30)}
                filename={'http://217.138.134.182:3006/'+ this.props.id + '/' + this.convertDate(this.state.startDate) + '/' + camera_card}
                 duration={camera_card.slice(27,30)}
                switchFile={this.props.switchFile}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default CameraIndex;
