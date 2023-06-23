import React, { Component } from 'react'
export default class NewsItems extends Component {
  render() {
    let {title,description,urlToImage,newsUrl,date,author} = this.props
    return (
      <>
        <div className="card" style={{margin:"5rem 1rem 1rem 1rem"}}>
          <img src={urlToImage} className="card-img-top" alt='Not Found' />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} Published At {date}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </>
    )
  }
}