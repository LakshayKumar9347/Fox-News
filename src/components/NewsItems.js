import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,urlToImage,newsUrl} = this.props
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <img src={urlToImage} className="card-img-top" alt="Not found"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </>
    )
  }
}
console.log();