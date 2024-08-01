import React, { Component } from 'react';

export class Recent extends Component {
  constructor(props) {
    super(props);
    
    // Assign props to the component instance
    this.props = props;
  }
  
  render() {
    return (
      <div className='container mt-5'>
        {/* Header for the recent data section */}
        <h3 className='text-center'>Recent Data</h3>
        
        <div className='ms-5'>
          {/* Unordered list of recent data items */}
          <ul className='text-left list-unstyled'>
            {/* Map over the recent data array and render each item */}
            {
              this.props.recent.map((data, index) => (
                <li
                  key={index} // Unique key for each list item
                  onClick={() => this.props.research(data.lat, data.lon)} // Handle click event by calling the research function with lat and lon
                >
                  {data.city} {/* Display the city name */}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Recent;
