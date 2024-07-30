import React, { Component } from "react";
import Loader from "../Components/Loader";

export class Result extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    let { weatherData: wdata } = this.props;
   // console.log("wdata", wdata);
      const ktoc = (k) =>{
        return(k- 273.15).toFixed(2)+" °C"
      }
      const getTime = (time) => {
        const date = new Date(time * 1000);
        return date.toLocaleTimeString()
      }

    let ShowData;
    if (this.props.weatherData === null) {
      if (this.props.loading === true) {
        ShowData = <Loader></Loader>;
      } else {
        ShowData = "";
      }
    } else {
      ShowData = (
       <div className="container mt">
        <div className="row">
          <div className="col">
            <div className="card border-primary">
              <div className="card-body">
                <h4 className="card-title">
                  <img src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`}  alt='img'></img>
                  <span className="pl-2 ms-3">{wdata.weather[0].description}</span>
                </h4>
                <div className="col">
        <div className="row">
          <table className="table w-100 border">
            <tbody>
              <tr>
                <th scope="row">feels like</th>
                <td>{ktoc(wdata.main.feels_like)}</td>
              </tr>
              <tr>
                <th scope="row">min. temp</th>
                <td>{ktoc(wdata.main.temp_min)}</td>
              </tr>
              <tr>
                <th scope="row">max. temp</th>
                <td>{ktoc(wdata.main.temp_max)}</td>
              </tr>
              <tr>
                <th scope="row">sun rise</th>
                <td>{getTime(wdata.sys.sunrise)}</td>
              </tr>

              <tr>
                <th scope="row">sun set</th>
                <td>{getTime(wdata.sys.sunset)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      );
    }
    return <>{ShowData}</>;
  }
}

export default Result;
