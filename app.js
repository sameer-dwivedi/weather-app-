let searchbox=document.getElementById('searchbox');

let searchbtn=document.getElementById('searchbtn');

let weatherinfo=document.getElementById('weatherinfo');

let temper=document.querySelector(".temper");

let city=document.querySelector(".city");

let humidity=document.querySelector(".humidity");

let windspeed=document.querySelector(".windspeed");

let weathercondition=document.querySelector(".weathercondition");

let apikey="e87fd5672ab8df4c2caabc65b864e1cd";

let apiurl="https://api.openweathermap.org/data/2.5/weather?";
// for celsuis 
async function showweather() {
    let city_name=searchbox.value;
    let response = await fetch(apiurl + `&units=metric` + `&q=${city_name}`+ `&appid=${apikey}`);
    let data= await response.json();
    console.log(data);

    temper.innerHTML=data.main.temp+"°c";

    city.innerHTML=data.name;

    humidity.innerHTML=data.main.humidity+"%";

    windspeed.innerHTML=data.wind.speed+"m/s";

    // console.log("run");
    if (data.weather[0].main=="Clouds") {
         weathercondition.src="media/clouds.png";
    } else if(data.weather[0].main=="Clear"){
        weathercondition.src="media/clear.png";
    } else if(data.weather[0].main=="Haze"){
        weathercondition.src="media/drizzle.png";
    }else if(data.weather[0].main=="Rain"){
        weathercondition.src="media/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weathercondition.src="media/snow.png";
    }
}

// for fahrenheit
async function showweatherF() {
    let city_name=searchbox.value;
    let response = await fetch(apiurl + `&units=imperial` + `&q=${city_name}`+ `&appid=${apikey}`);
    let data= await response.json();
    console.log(data);

    temper.innerHTML=data.main.temp+"F";

    city.innerHTML=data.name;

    humidity.innerHTML=data.main.humidity+"%";


    windspeed.innerHTML=data.wind.speed+"miles/h";

    // console.log("run");
    if (data.weather[0].main=="Clouds") {
        weathercondition.src="media/clouds.png";
   } else if(data.weather[0].main=="Clear"){
       weathercondition.src="media/clear.png";
   } else if(data.weather[0].main=="Haze"){
       weathercondition.src="media/drizzle.png";
   }else if(data.weather[0].main=="Rain"){
       weathercondition.src="media/rain.png";
   }
   else if(data.weather[0].main=="Snow"){
       weathercondition.src="media/snow.png";
   }
}
// for kelvin
async function showweatherk() {
    let city_name=searchbox.value;
    let response = await fetch(apiurl + `&q=${city_name}`+ `&appid=${apikey}`);
    let data= await response.json();
    console.log(data);

    temper.innerHTML=data.main.temp+" K";

    city.innerHTML=data.name;

    humidity.innerHTML=data.main.humidity+" %";


    windspeed.innerHTML=data.wind.speed+" m/s";

    // console.log("run");
    if (data.weather[0].main=="Clouds") {
        weathercondition.src="media/clouds.png";
   } else if(data.weather[0].main=="Clear"){
       weathercondition.src="media/clear.png";
   } else if(data.weather[0].main=="Haze"){
       weathercondition.src="media/drizzle.png";
   }else if(data.weather[0].main=="Rain"){
       weathercondition.src="media/rain.png";
   }
   else if(data.weather[0].main=="Snow"){
       weathercondition.src="media/snow.png";
   }
}


