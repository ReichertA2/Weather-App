const ApiKey = "613c0cd21e242bac9dd2b81dccf7a668"


function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(document.getElementsByName("city")[0]. value) 

  
    doAPICall(document.getElementsByName("city")[0]. value)


}


async function doAPICall(city){
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=imperial`)
    console.log(result)


   
    let img = document.createElement("img")
    img.src = "images/clouds.jpg";
    img.class = "card-img-overlay";
    img.alt = "...";
    img.style.height = "450px"
    img.style.width = "290px"
    img.style.marginBottom = "350px";
    document.body.appendChild(img);
    
    let header = document.getElementsByTagName('h4')[0];
    header.innerText=result.data.name;

   
 


 
    let high1 = document.getElementById("hightitle");
    high1.innerText="High" ;

    let high = document.getElementsByClassName("card-title1")[0];
    high.innerText=Math.round(result.data.main.temp_max) + '\u00B0F' ;
    

    let low1 = document.getElementById("lowtitle");
    low1.innerText="Low";

    let low = document.getElementsByClassName("card-title2")[0];
    low.innerText=Math.round(result.data.main.temp_min) + '\u00B0F';


    let forecast1 = document.getElementById("forcasttitle");
    forecast1.innerText="Forecast";

    let forecast = document.getElementsByClassName("card-title3")[0];
    forecast.innerText=result.data.weather[0].description;

    let humidity1 = document.getElementById("humiditytitle");
    humidity1.innerText="Humidity";

    let humidity = document.getElementsByClassName("card-title4")[0];
    humidity.innerText=result.data.main.humidity + '%';
}


// function renderImage(){
//     let image = document.getElementsByClassName('card')[0];
//     let img = document.createElement("img")
//     img.src = "images/clouds.jpg";
//     img.class = "card-img img-fluid";
//     img.alt = "...";
//     image.appendChild(img);
    
// }

// renderImage()