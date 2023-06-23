import React, { Component } from 'react'
export default class NewsItems extends Component {
  render() {
    let {title,description,urlToImage,newsUrl} = this.props
    return (
      <>
        <div className="card" style={{margin:"5rem auto 0.1rm auto"}}>
          <img src={urlToImage} className="card-img-top" alt='Not Found' />
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