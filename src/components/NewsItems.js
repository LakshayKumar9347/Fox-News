import React, { Component } from 'react'
export default class NewsItems extends Component {
  render() {
    let {title,description,urlToImage,newsUrl,date,author,source} = this.props
    return (
      <>
        <div className="card" style={{margin:"1rem"}}>
          <img src={urlToImage} className="card-img-top" alt='Not Found' />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h6><span className="badge bg-danger">{source}</span></h6>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} <br />
            Published At {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </>
    )
  }
}