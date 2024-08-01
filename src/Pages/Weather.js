import React, { Component } from "react";
import Result from "./Result";
import Search from "./Search";
import axios from "axios";
import Recent from "./Recent";

export class Weather extends Component {
  constructor(props) {
    super(props);
    // Initialize state variables
    this.state = {
      lat: "",
      lon: "",
      city: "",
      weatherData: null,
      loading: false,
      recent: [],
    };
  }

  // Handler for input field changes
  inputChangeHandler = (e) => {
    const name = e.target.name;
    if (name === "city") {
      this.setState({ city: e.target.value });
    } else if (name === "lat") {
      this.setState({ lat: e.target.value });
    } else if (name === "lon") {
      this.setState({ lon: e.target.value });
    } else {
      console.log("Name Not Valid");
    }
  };

  // Handler for search button click
  searchHandler = (e) => {
    e.preventDefault();
    // Make API call to get weather data based on latitude and longitude
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=e1ca02e40c57a7fded0ee1966deadf0c`
      )
      .then((res) => {
        console.log(res);
        this.setState(
          {
            city: res.data.name,
            weatherData: res.data,
          },
          () => {
            this.recentDataHandler(); // Update recent data list
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handler for getting weather data based on the user's current location
  locationHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude,
            });
            const { latitude, longitude } = res.coords;

            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e1ca02e40c57a7fded0ee1966deadf0c`
              )
              .then((res) => {
                this.setState(
                  {
                    city: res.data.name,
                    weatherData: res.data,
                    loading: false,
                  },
                  () => {
                    this.recentDataHandler(); // Update recent data list
                  }
                );
              })
              .catch((err) => {
                console.log(err);
              });
          }, 2000);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log("Geolocation not supported");
    }
  };

  // Handler to update the list of recent searches
  recentDataHandler = () => {
    const recent = this.state.recent;
    recent.push({
      city: this.state.city,
      lat: this.state.lat,
      lon: this.state.lon,
    });
    this.setState({ recent });
  };

  // Handler for searching weather data based on latitude and longitude
  reserchHandler = (lat, lon) => {
    this.setState({ lat, lon });

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e1ca02e40c57a7fded0ee1966deadf0c`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          city: res.data.name,
          weatherData: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="mt-5">
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          city={this.state.city}
          change={this.inputChangeHandler}
          location={this.locationHandler}
          search={this.searchHandler}
        />
        <Result
          loading={this.state.loading}
          weatherData={this.state.weatherData}
        />
        <Recent
          recent={this.state.recent}
          research={this.reserchHandler}
        />
      </div>
    );
  }
}

export default Weather;
