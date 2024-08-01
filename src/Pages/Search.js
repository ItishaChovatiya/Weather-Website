import React, { Component } from 'react';

export class Search extends Component {
  constructor(props) {
    super(props);
    // Assign props to the component instance
    this.props = props;
  }

  render() {
    return (
      <div>
        <div className="container mt">
          <div className="row">
            {/* Form to input city name */}
            <div className="col-lg-5 col-md-5 col-sm-12">
              <form>
                <div className="mb-3">
                  <label className="form-label">Enter City Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter City Name"
                    name="city"
                    value={this.props.city}
                    onChange={this.props.change}
                  />
                </div>
              </form>
            </div>

            {/* Separator */}
            <div className="col-lg-1 col-md-1 col-sm-12">
              <form className="pt-4">
                <label className="form-label text-bold">Or</label>
              </form>
            </div>

            {/* Form to input latitude and longitude or use location */}
            <div className="col-lg-5 col-md-5 col-sm-12">
              <form>
                {/* Button to get coordinates based on the user's location */}
                <div className="mb-3">
                  <button className="btn" onClick={this.props.location}>
                    get-ordinant
                    <span className="material-symbols-outlined">
                      my_location
                    </span>
                  </button>
                </div>

                {/* Input for latitude */}
                <div className="mb-3">
                  <label className="form-label">Lat:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Latitude"
                    name="lat"
                    value={this.props.lat}
                    onChange={this.props.change}
                  />
                </div>

                {/* Input for longitude */}
                <div className="mb-3">
                  <label className="form-label">Lon :</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter longitude"
                    name="lon"
                    value={this.props.lon}
                    onChange={this.props.change}
                  />
                </div>

                {/* Button to trigger search based on entered coordinates */}
                <div className="mb-3">
                  <button className="btn" onClick={this.props.search}>
                    search
                    <i className='fa fa-search ms-3' style={{ fontSize: "24px" }}></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
