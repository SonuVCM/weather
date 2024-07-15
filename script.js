const btn = document.getElementById('btn');

btn.addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;

    const weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=553999dcc0054ef5a7384102232803&q=${city}`);
    const data = await weather.json();

    document.getElementById('loc').textContent = data.location.name;
    document.getElementById('locp').textContent = data.location.name;
    document.getElementById('temp').textContent = `${data.current.temp_c}°C`;
    document.getElementById('datetime').textContent = data.location.localtime;
    document.getElementById('cloudy').textContent = data.current.condition.text;
    document.getElementById('humidity').textContent = `${data.current.humidity} %`;
    document.getElementById('preci').textContent = `${data.current.precip_in} %`;
    document.getElementById('wind').textContent = `${data.current.wind_kph} km/h`;


}