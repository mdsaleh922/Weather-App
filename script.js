const apikey = "74d86f56d8a3a6fd7a6f03dc1b2d227f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let sky_color = data.weather[0].main
    console.log("sky", sky_color)

    if (sky_color == 'Clouds') {
        weatherIcon.setAttribute('src', "../Images/clouds.png")
    } else if (sky_color == 'Clear') {
        weatherIcon.setAttribute('src', "../Images/clear.png")
    } else if (sky_color == 'Rain') {
        weatherIcon.setAttribute('src', "../Images/rain.png")
    } else if (sky_color == 'Drizzle') {
        weatherIcon.setAttribute('src', "../Images/drizzle.png")
    } else if (sky_color == 'Mist') {
        weatherIcon.setAttribute('src', "../Images/mist.png")
    }

}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})

