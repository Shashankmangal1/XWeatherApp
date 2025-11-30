XWeather – Real-Time Weather Application (React)

XWeather is a React-based weather information application developed using the WeatherAPI service.
Users can search any city and view real-time temperature, humidity, condition, and wind speed.

☀️ Features

Search weather by city

Shows:

Temperature (°C)

Humidity (%)

Condition (cloudy, sunny, etc.)

Wind Speed (km/h)

Real-time data fetching using WeatherAPI

Loading indicator

Error handling for invalid cities

Clean and responsive UI

🧰 Tech Stack

React.js

Fetch API

WeatherAPI

CSS3

🏗️ Project Structure
XWeather/
 ├─ public/
 ├─ src/
 │   ├─ App.js
 │   ├─ WeatherCard.jsx
 │   ├─ index.css
 │   └─ index.js
 ├─ package.json
 └─ README.md

⚙️ Installation & Setup

Clone the repo:

git clone <repo-url>


Install dependencies:

npm install


Add your API Key in App.js

const API_KEY = "your_api_key_here";


Run the project

npm start

🌍 API Used

WeatherAPI
Endpoint used:

https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=CITY_NAME

📸 Screenshots

(Add your screenshots here)

Initial UI

Weather displayed

Loading message

Invalid city alert

🧪 Behavior & Requirements Covered

✔ Uses input + button
✔ Search triggers only on button click
✔ Shows “Loading data…” while fetching
✔ Displays 4 weather cards
✔ Shows alert on invalid city
✔ Uses required class names (weather-cards, weather-card)

📜 License

This project is part of the Crio FE Buildout learning modules.