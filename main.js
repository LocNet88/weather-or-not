const apiKey = 'Q4W27NSDV67XWCVKMDGL6TBFQ';
const city = 'Kansas City';
const apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kansas%20city?unitGroup=metric&key=Q4W27NSDV67XWCVKMDGL6TBFQ&contentType=json';

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log(data);

    const weatherDescriptionElement = document.getElementById('weather-description');

weatherDescriptionElement.textContent = data.currentConditions.conditions;
})
.catch(error => {
    console.error('Error fetching data:', error);
});

const forecastDays = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kansas%20city/next6days?unitGroup=metric&key=Q4W27NSDV67XWCVKMDGL6TBFQ&contentType=json';

fetch(forecastDays)
.then(response => response.json())
.then(data => {
    console.log(data);

    const sixDaysElement = document.getElementById('sixDays');

    for (let i = 0; i < data.days.length; i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = data.days[i].datetime + ': ' + data.days[i].tempmax + '°C';
        sixDaysElement.appendChild(dayElement);
      }
})

.catch(error => {
    console.error('Error fetching forecast data', error);
});