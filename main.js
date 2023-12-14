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


