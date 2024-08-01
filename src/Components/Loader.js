import React, { Component } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';  // Importing PacmanLoader spinner from react-spinners

export class Loader extends Component {
  render() {
    return (
      <div>
        {/* PacmanLoader spinner component */}
        <PacmanLoader
          color="rgba(54, 102, 214, 1)"  // Color of the spinner
          margin={3}                    // Margin between spinner elements
          size={30}                     // Size of the spinner
        />
      </div>
    );
  }
}

export default Loader;
