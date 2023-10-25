
fetch("../../Data/movies.json")
.then(res => console.log(res.json()))
.then(data => console.log(JSON.stringify(data)))

// import results from '../../Data/movies.json' assert { type: 'json' }
// console.log(results)