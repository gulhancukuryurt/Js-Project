const APIURL="https://goweather.herokuapp.com/weather";


const search = document.getElementById("search");
const form = document.getElementById("form");
const main = document.getElementById("main");


async function getWeatherByLocation (city){
       const resp= await fetch(APIURL+'/'+city);
       const respData = await resp.json();

       addWeatherToPage(respData);

       
}

function addWeatherToPage(data) {
    const weather = document.createElement('div');
    weather.classList.add('weather');
    weather.innerHTML = `
        <img src="./images/country.png"/>  
        <h2>City: ${search.value} </h2>
        <img src="./images/temp.png"/> 
        <h3> Temperature: ${data.temperature} </h3>
        <img src="./images/wind.png"/> 
        <h3>Wind: ${data.wind} </h3>
    
    `;

    main.innerHTML= '';

    main.appendChild(weather);
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    

    const city = search.value;

    if(city){
        getWeatherByLocation(city);
        
    }

    
});
