# Weather App

## Overview
This project is a simple weather application that provides current weather information for various cities. Users can search for a city's weather or select predefined cities to get updated weather details. The application uses the OpenWeatherMap API to fetch real-time weather data.

## Features
- Display current weather conditions, including temperature, description, humidity, and wind speed.
- Interactive search functionality for querying weather by city name.
- Predefined buttons for quick access to popular cities (e.g., Casablanca, Rabat, Marrakech, Tanger).
- Responsive and user-friendly UI with animations for better user experience.
- Not-found message and graphic when a city is not found in the API database.

## Technologies Used
- **HTML**: For the structure of the web page.
- **CSS**: For styling and animations.
- **JavaScript**: For interactivity and fetching data from the API.
- **OpenWeatherMap API**: To retrieve real-time weather data.

## Project Structure
```
root
├── index.html    # Main HTML file
├── style.css     # Styling for the application
├── script.js     # JavaScript logic for fetching and displaying data
├── images        # Contains images used in the application
└── README.md     # Project documentation
```

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```

3. Open the `index.html` file in your browser.

## Usage
1. Enter the name of a city in the search box and click the search button to get the current weather details.
2. Alternatively, click one of the predefined city buttons to view weather information for that city.
3. If the entered city is not found, a friendly error message will be displayed.

## API Key Configuration
This application uses the OpenWeatherMap API. Replace the placeholder API key in `script.js` with your own API key:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

## Known Issues
- Weather data might not display if the API key is invalid or the API limit is exceeded.
- Some styling inconsistencies might occur on smaller screens; further responsive design adjustments are needed.

## Future Improvements
- Add support for hourly and weekly forecasts.
- Improve responsiveness for smaller devices.
- Implement geolocation to fetch the user's current weather automatically.
- Display additional weather data such as air quality and sunrise/sunset times.

## License
This project is licensed under the MIT License.

---

### Screenshots
1. **Main Screen**: Displays weather for the selected city.
2. **Not Found Screen**: Displays an error message when a city is not found.

Add images of your app here for a better user understanding.

---

Feel free to contribute or suggest improvements to the project!

