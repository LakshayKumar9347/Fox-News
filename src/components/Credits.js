import React, { Component } from 'react'

export default class Credits extends Component {
  render() {
    return (
      <div className="container w-70 h-40">
        <div className="row align-items-md-stretch m-2">
          <div className="col-md-6">
            <div className="p-5 text-bg-dark rounded-3">
              <h2>Change the background</h2>
              <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
              <button className="btn btn-outline-light" type="button">Example button</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
