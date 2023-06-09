import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,desc,url} = this.props
    return (
      // api key = 'dd30967d1d854b799d75da5a94a311c2'
      <>
        <div className="card" style={{width: "18rem"}}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="/" className="btn btn-primary">Load More</a>
          </div>
        </div>
      </>
    )
  }
}