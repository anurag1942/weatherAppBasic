const apiKey="863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric";
async function checkWeather(){
    const response=await fetch(apiUrl+`&appid=${apiKey}`);
    const data=response.json();
    
    document.querySelector(".city").innerHtml=data.name;
    document.querySelector(".temp").innerHtml=data.main.temp;
    document.querySelector(".humidity").innerHtml=data.main.humidity;
    document.querySelector(".wind").innerHtml=data.wind.speed;
}
checkWeather();