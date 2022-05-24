const ApiKey = "613c0cd21e242bac9dd2b81dccf7a668"

// const clientID = "379a3870b11b4802ac99172160b19e74"
// const clientSecret = "1bd1284219b849e19d8358509da0e71d"
//get token
// const getToken = async () => {
//     const result = await fetch(`https://accounts.spotify.com/api/token`, {
//         method: 'POST',

//         body: 'grant_type=client_credentials'
//     });
    
//     const data = await result.json();
//     console.log(data)
//     return data.access_token
// }

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(document.getElementsByName("city")[0]. value) //[0] since there is only have one element on our page with the name season which is the year. value is the html property for whatever is typed into that box.
    
    doAPICall(document.getElementsByName("city")[0]. value)

}

// const getWeather = async (city) =>{
   
//     const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${limit}&appid=${ApiKey}`, {
//         method: 'GET',

//     });
//     const data = await res.json();
//     console.log(data)
//     return data.tracks.items[0]
// }

async function doAPICall(city){
    let result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&appid=${ApiKey}`)
    console.log(result)
    // result=result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    // console.log(result)
    // let h5High = document.getElementsByClassName('card-title1');
    // let h1 = document.createElement('h1')
    // h1.innerText=
    // h5High.appendChild(h1)
    
}  
