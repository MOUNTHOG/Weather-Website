const apiKey = "e7b7ccf65f23c989d63028995fe89c4e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status =="404"){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) +"km/h";
        document.querySelector(".search input").innerHTML = searchBox;

        if(data.weather[0].main == "Clouds"){
            icon.src ="clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            icon.src ="clear.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            icon.src ="drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            icon.src ="mist.png"
        }
        else if(data.weather[0].main == "Rain"){
            icon.src ="rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            icon.src ="snow.png"
        }
        else if(data.weather[0].main == "Haze"){
            icon.src ="haze.png"
        }
        else if(data.weather[0].main == "Thunderstorm"){
            icon.src ="thunderstorm.png"
        }
        else if(data.weather[0].main == "Hail"){
            icon.src ="hail.png"
        }
        else if(data.weather[0].main == "Smoke"){
            icon.src ="smoke.png"
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
    console.log(data);
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value); 
   
})

searchBox.addEventListener('keyup', e =>{
    if(e.keyCode===13){
    checkWeather(searchBox.value); 
    }
})
