import React, { Component } from 'react'
import NewItems from './NewsItems'
import Spinner from './Spinner'
// todo --> code is working fine just my api requeest limit has been succeded 
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
    fetchDataFromApi = async (category, number) => {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category ? category : ''}&apiKey=dd30967d1d854b799d75da5a94a311c2&page=${number ? number : 1}&pagesize=7`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({ loading: false })
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
        console.log('This is component did mount page', page);
        this.fetchDataFromApi("", page)
        console.log("Component Is Mounted🤍")
    }
    handlePrevClick = () => {
        console.log("Previous Button Clicked👆🏻")
        this.setState({ page: this.state.page - 1 })
        let pageIncrement = this.state.page - 1
        this.fetchDataFromApi("", pageIncrement)
    }
    handleNextClick = async () => {
        console.log("Next Button Clicked👆🏻")
        this.setState({ page: this.state.page + 1 })
        let pageIncrement = this.state.page + 1
        this.fetchDataFromApi("", pageIncrement)
    }
    render() {
        return (
    <>
    <div className="container row" style={{ width: "80%", margin: "2rem auto auto auto" }}>
        <h1 className='text-light  m-3 text-center' style={{ fontFamily: 'Montserrat' }}>News Top Headlines</h1>
        {this.state.loading ? <Spinner /> : undefined}
        {!this.state.loading && this.state.articles.map((e) => {
            return <div className="col-lg-4 col-md-6 p-3" key={e.url} >
                <NewItems title={e.title ? e.title.substring(0, 70) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus "} description={e.description ? e.description.substring(0, 140) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum reiciendis expedita est assumenda vitae. Rerum sint labore "} urlToImage={e.urlToImage ? e.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRw0HJXAFqIU3Oof0GD7YztSNNAKP-uEsYoHCSzDb-a232wqkDWov4lapVXdTBHp9ErA&usqp=CAU"} newsUrl={e.url} />
            </div>
        })}
        <div className="container my-5 d-flex justify-content-between">
            <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type="button" className="btn btn-dark" > &larr; Previous </button>
            <button onClick={this.handleNextClick} disabled={this.state.page >= Math.ceil((this.state.totalResults) / 7)} type="button" className="btn btn-dark"> Next &rarr; </button>
        </div>
    </div>
    </>
        )
    }
}

