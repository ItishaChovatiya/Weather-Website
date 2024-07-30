import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.props = props
      }
    render() {
    return (
      <div>
        <div className="container mt">
          <div className="row ">
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
                  ></input>
                </div>
              </form>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12">
              <form className="pt-4">
                <label className="form-label text-bold">Or</label>
              </form>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <form>
                <div className="mb-3">
                  <button className="btn" onClick={this.props.location}>get-ordinant
                    <span className="material-symbols-outlined">
                      my_location
                    </span>
                  </button>
                </div>
                <div className="mb-3">
                  <label className="form-label">Lat:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Latitude"
                    name="lat"
                    value={this.props.lat}
                    onChange={this.props.change}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Lon :</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter longitude"
                    name="lon"
                    value={this.props.lon}
                    onChange={this.props.change}
                  ></input>
                </div>
                <div className="mb-3">
               
                  <button className="btn" onClick={this.props.search}>search<i className='fa fa-search ms-3' style={{fontSize:"24px"}}>
                  </i></button>
                    
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search