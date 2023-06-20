async fetchDataFromApi(category,number) {
    try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category?category:''}&apiKey=dd30967d1d854b799d75da5a94a311c2&page=${number?number:1}&pagesize=7`
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

  export  handleCategorySports=()=>{
        this.fetchDataFromApi("sports",1)
   
    }
   
    export default (first) => {second}