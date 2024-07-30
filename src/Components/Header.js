import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
                <section className=" header position-sticky top-0 bg-white">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <div className="row">
                <div className="col-10 ">
                  <img
                    src="asset/logo.jpg"
                    alt="img"
                    style={{ width: "24%" }}
                  ></img>
                </div>
                <div className="col-2">
                  <button
                    className="navbar-toggler float-end "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active "
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to="/weather"
                    >
                      Weather
                    </Link>
                  </li>
                </ul>

                <div className="container ">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    )
  }
}

export default Header