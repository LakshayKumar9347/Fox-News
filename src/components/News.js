import React, { Component } from 'react'
import NewItems from './NewsItems'
import Spinner from './Spinner'

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
    async fetchDataFromApi(number) {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dd30967d1d854b799d75da5a94a311c2&page=${number}&pagesize=7`
            let data = await fetch(url)
            let parsedData = await data.json()
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
        console.log("Component Is Mounted🤍")
    }
    handlePrevClick = async () => {
        console.log("Previous Button Clicked👆🏻")
        this.setState({ page: this.state.page - 1 })
        let pageIncrement = this.state.page - 1
        this.fetchDataFromApi(pageIncrement)
    }
    handleNextClick = async () => {
        console.log("Next Button Clicked👆🏻")
        this.setState({ page: this.state.page + 1 })
        let pageIncrement = this.state.page + 1
        this.fetchDataFromApi(pageIncrement)
    }
    render() {
        return (
            <>
                <div className="container row" style={{ width: "80%", margin: "2rem auto auto auto" }}>
                    <h1 className='text-light text-center m-3'>News - Top Headlines</h1>
                    {this.state.loading && <Spinner />}
                    {/* //todo this to render card */}
                    {this.state.articles.map((e) => {
                        return <div className="col-lg-4 col-md-6 p-3" key={e.url} >
                            <NewItems title={e.title ? e.title.substring(0, 70) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus "} description={e.description ? e.description.substring(0, 140) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum reiciendis expedita est assumenda vitae. Rerum sint labore "} urlToImage={e.urlToImage ? e.urlToImage : "https://www.destructoid.com/wp-content/uploads/2023/06/Foamstars_LogoLead_061023.jpg"} newsUrl={e.url} />
                        </div>
                    })}
                    <div className="container my-5 d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type="button" className="btn btn-dark" > &larr; Previous </button>
                        <button onClick={this.handleNextClick} type="button" className="btn btn-dark"> Next &rarr; </button>
                    </div>
                </div>
            </>
        )
    }
}
