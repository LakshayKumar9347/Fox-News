// async fetchDataFromApi(category,number) {
//     try {
//         let url = ``
//         this.setState({ loading: true })
//         let data = await fetch(url)
//         let parsedData = await data.json()
//         this.setState({ loading: false })
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults
//         })
//     } catch (error) {
//         return new Error("Unable To fetch data", Error)
//     }
// }   

//   export  handleCategorySports=()=>{
//         this.fetchDataFromApi("sports",1)
   
//     }
   
//     export default (first) => {second}