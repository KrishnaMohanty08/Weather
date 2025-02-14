# Weather App

This repository contains a simple weather application that allows users to search for weather information by city. The app displays current weather conditions including temperature, humidity, wind speed, and more.

## Features

- **City Search**: Users can search for any city to get the current weather data.
- **Real-Time Weather Information**: The app fetches data from the OpenWeatherMap API to display current weather conditions such as temperature, humidity, wind speed, and pressure.
- **Responsive Design**: The app is designed to be responsive and works well on various screen sizes.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Open `weather.html` in your browser to see the app in action.

## Usage

- Enter the name of a city in the search bar and press Enter.
- The app will display the current weather information for the specified city.

## Files Overview

- **index.js**: Contains the JavaScript code that handles API calls to OpenWeatherMap and updates the UI with the fetched weather data.
- **weather.css**: Contains the styling for the app, ensuring a clean and modern look.
- **weather.html**: The main HTML file that structures the app's user interface.

## API Integration

The app uses the [WeatherAPI](https://www.weatherapi.com/my/api) to retrieve weather data. You need to replace the API key in `index.js` with your own key from OpenWeatherMap:

```javascript
const weatherUrl = `https://www.weatherapi.com/docs/`;
```

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, please contact [mohantykrishna57@gmail.com]

---

Feel free to customize this README with your details, such as the repository link, contact information, or any additional sections you'd like to include!
