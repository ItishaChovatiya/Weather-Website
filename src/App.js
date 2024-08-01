import React, { Component } from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Weather from "./Pages/Weather";

export class App extends Component {
  render() {
    return (
      <div>
        {/* Render the Header component */}
        <Header />

        {/* Set up routing using react-router-dom */}
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the Weather page */}
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    );
  }
}

export default App;
