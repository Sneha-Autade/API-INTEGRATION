async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '6633fc1f6fe6f0a9130937d227aa2ac7'; // Replace with your OpenWeather API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById('weather-result').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather-result').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}