import React, { Component } from "react";
import Loader from "../Components/Loader";

export class Result extends Component {
  constructor(props) {
    super(props);

    // Assign props to the component instance
    this.props = props;
  }

  render() {
    // Destructure weatherData from props and rename it to wdata
    let { weatherData: wdata } = this.props;

    // Function to convert temperature from Kelvin to Celsius and format it
    const ktoc = (k) => {
      return (k - 273.15).toFixed(2) + " °C";
    };

    // Function to convert Unix timestamp to local time string
    const getTime = (time) => {
      const date = new Date(time * 1000);
      return date.toLocaleTimeString();
    };

    // Variable to hold the content to be shown
    let ShowData;

    // Conditional rendering based on the state of weatherData and loading
    if (this.props.weatherData === null) {
      // If weatherData is null, show the Loader component if loading is true
      if (this.props.loading === true) {
        ShowData = <Loader />;
      } else {
        ShowData = ""; // Show nothing if not loading
      }
    } else {
      // If weatherData is available, render the weather details
      ShowData = (
        <div className="container mt">
          <div className="row">
            <div className="col">
              <div className="card border-primary">
                <div className="card-body">
                  <h4 className="card-title">
                    {/* Display weather icon and description */}
                    <img
                      src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`}
                      alt="Weather icon"
                    />
                    <span className="pl-2 ms-3">{wdata.weather[0].description}</span>
                  </h4>
                  <div className="col">
                    <div className="row">
                      <table className="table w-100 border">
                        <tbody>
                          {/* Display various weather details */}
                          <tr>
                            <th scope="row">Feels like</th>
                            <td>{ktoc(wdata.main.feels_like)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Min. temp</th>
                            <td>{ktoc(wdata.main.temp_min)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Max. temp</th>
                            <td>{ktoc(wdata.main.temp_max)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Sunrise</th>
                            <td>{getTime(wdata.sys.sunrise)}</td>
                          </tr>
                          <tr>
                            <th scope="row">Sunset</th>
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

    // Render the content stored in ShowData
    return <>{ShowData}</>;
  }
}

export default Result;
