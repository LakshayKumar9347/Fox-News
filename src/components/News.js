import React, { Component } from 'react'
import NewItems from './NewsItems'
import Spinner from './Spinner'
import './stylesNews.css'
import InfiniteScroll from 'react-infinite-scroll-component'
// import data from './sampleData.json'
// integration of environmental variale so that we can able to hide our api key

// ! --> code is working fine just my api requeest limit has been succeded 
export default class News extends Component {// articles = [here will the sampleData.json]
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 1
        }
    }
    fetchDataFromApi = async (number) => {
        let { category } = this.props
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category ? category : ''}&apiKey=dd30967d1d854b799d75da5a94a311c2&page=${number ? number : 1}&pagesize=7`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({ loading: false })
            //!code for offline new
            //     this.setState({
            // let sampleData = data  --> use this line after loading true
            //          articles: sampleData.articles,
            //          totalResults: sampleData.totalResults
            //    })
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults
            })
        } catch (error) {
            return new Error("Unable To fetch data", Error)
        }
    }
    componentDidMount = () => {
        let page = this.state.page
        this.fetchDataFromApi(page)
       // console.log("Component Is Mounted🤍")
    }
    handlePrevClick = () => {
       // console.log("Previous Button Clicked👆🏻")
        this.setState({ page: this.state.page - 1 })
        let pageIncrement = this.state.page - 1
        this.fetchDataFromApi(pageIncrement)
    }
    handleNextClick = async () => {
        // console.log("Next Button Clicked👆🏻")
        this.setState({ page: this.state.page + 1 })
        let pageIncrement = this.state.page + 1
        this.fetchDataFromApi(pageIncrement)
    }
     capitalizeFirstLowercaseRest = str => {
        return (
          str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        );
      };
      
    render() {
        let { category } = this.props
        return (
            <>
<div className="parallax">
    <div className="parallax-content">
    <h1 className='text-light my-3 text-center' style={{ fontFamily: 'Lucida Sans',margin:'0.5rem' }}>Top {this.capitalizeFirstLowercaseRest(category)} Headlines</h1>
        <div className="container row" style={{ width: "100%", margin: "0 auto auto auto" }} >
            {this.state.loading ? <Spinner /> : undefined}
            {!this.state.loading && this.state.articles.map((e) => {
                return <div className="col-lg-4 col-md-6 p-3" key={e.url} >
                    <NewItems title={e.title ? e.title.substring(0, 70) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus "} description={e.description ? e.description.substring(0, 140) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum reiciendis expedita est assumenda vitae. Rerum sint labore "} urlToImage={e.urlToImage ? e.urlToImage : "https://media.zigcdn.com/media/content/2023/Jun/cover_649eab46c4b3c.jpg"} newsUrl={e.url} date={e.publishedAt} author={e.author} source={e.source.name} />
                </div>
            })}
        </div>
        <div className="container p-2 d-flex justify-content-between">
            <button onClick={this.handlePrevClick} disabled={this.state.page <= 1} type="button" className="btn btn-light" > &larr; Previous </button>
            <button onClick={this.handleNextClick} disabled={this.state.page >= Math.ceil((this.state.totalResults) / 7)} type="button" className="btn btn-light"> Next &rarr; </button>
        </div>
    </div>

</div>

            </>
        )
    }
}


