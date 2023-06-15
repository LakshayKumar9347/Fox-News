import React, { Component } from 'react'
import NewItems from './NewsItems'
export default class News extends Component {
    // articles = [here will the sampleData.json]
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 1
        }
    }
    //todo  Code to fetch Api from server
    async fetchDataFromApi() {
        try {
            let value = this.state.page
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dd30967d1d854b799d75da5a94a311c2&page=${value}&pagesize=11`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({ articles: parsedData.articles })
            this.setState({totalResults:parsedData.totalResults })
        } catch (error) {
            return new Error("Unable To fetch data", Error)
        }
    }
    componentDidMount =() => {
        this.fetchDataFromApi()
        let logArticles = this.state.totalResults
        // console.log("Running ComponentDIDMount❤️")
        console.log(logArticles);

    }
    //todo 1st onclick event trigger to change the url parameter to page =2 //todo how to achieve this ? //todo checks =>{totalresults/11}    
    handlePrevClick = () => {
        console.log('Clicking on Previous Button');
        this.setState({ page: this.state.page - 1 })
        this.fetchDataFromApi()
    }
    handleNextClick = () => {
        console.log(("click on Next Button"));
        this.setState({ page: this.state.page + 1 })
        this.fetchDataFromApi()
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
                            <NewItems title={e.title ? e.title.substring(0, 70) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus "} description={e.description ? e.description.substring(0, 140) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum reiciendis expedita est assumenda vitae. Rerum sint labore "} urlToImage={e.urlToImage ? e.urlToImage : "https://www.destructoid.com/wp-content/uploads/2023/06/Foamstars_LogoLead_061023.jpg"} newsUrl={e.url} />
                        </div>
                    })}
                    <div className="container my-5 d-flex justify-content-between">
                        <button onClick={this.handlePrevClick} disabled={this.state.page < 1} type="button" className="btn btn-dark" > &larr; Previous </button>
                        <button onClick={this.handleNextClick} disabled={this.state.page > ((this.state.totalResults) / 11)} type="button" className="btn btn-dark"> Next &rarr; </button>
                    </div>
                </div>
            </>
        )
    }
}
