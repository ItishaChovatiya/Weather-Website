import React, { Component } from 'react'

export class Recent extends Component {
    constructor(props) {
      super(props)
    
      this.props=props
      }
    
  render() {
    return (
      <div className='container mt-5'>
        <h3 className='text-center'> Recent Data</h3>
        <div className='ms-5'>
            <ul className='text-left list-unstyled'>
                {
                    this.props.recent.map((data,index)=>{
                        return<li key={index} onClick={() => this.props.research(data.lat,data.lon)}>{data.city}</li>
                    })
                }
            </ul>
        </div>

      </div>
    )
  }
}

export default Recent