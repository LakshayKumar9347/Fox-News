import React, { Component } from 'react'
import NewItems from './NewsItems'
export default class News extends Component {
    // articles = [here will the sampleData.json]
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false
        }
    }
    //todo  Code to fetch Api from server
    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=dd30967d1d854b799d75da5a94a311c2'
        let data =await fetch(url)
        let parsedData = await data.json() //todo  this is correct  ! this is not correct X parsedData = (await data).json
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
        }
        handlePrevClick = function () {
            console.log('prev');
        }
        handleNextClick = function () {
            console.log('next');
        }
render() {
return (
    <>
<div className="container row" style={{ width: "80%", margin: "2rem auto auto auto" }}>
    <h1 className='text-light  m-3'>News - Top Headlines</h1>
    {/* //! this is to render loading spinner */}
    {this.state.loading === true ? <div className="container" style={{ width: "92%", margin: "2rem auto auto auto" }}>
        <div className="d-flex align-items-center text-light">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    </div> : undefined}
    {/* //! this to render card */}
    {this.state.articles.map((e) => {
        return <div className="col-lg-4 col-md-6 p-3" key={e.url} >
            <NewItems title={e.title.substring(0, 70)} description={e.description ? e.description.substring(0, 140) : ""} urlToImage={e.urlToImage ? e.urlToImage : "https://www.destructoid.com/wp-content/uploads/2023/06/Foamstars_LogoLead_061023.jpg"} newsUrl={e.url} />
        </div>
    })}
    <div className="container my-5 d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr; </button>
    </div>
</div>
    </>
)
}
}
