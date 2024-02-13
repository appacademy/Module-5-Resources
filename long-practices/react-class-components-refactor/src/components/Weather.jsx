//!!START SILENT
import { useState, useEffect } from 'react';
//!!END
//!!ADD
// import React from 'react';
//!!END_ADD
import { toQueryString } from '../utils';

//!!START SILENT
function Weather() {
  const [weather, setWeather] = useState(null);
//!!END
//!!ADD
// class Weather extends React.Component {
    // constructor(props) {
      // super(props);
      // this.state = {
        // weather: null
      // };
    // }
    //
    // componentDidMount() {
      // navigator.geolocation?.getCurrentPosition(
        // this.pollWeather,
        // (err) => console.log(err),
        // { timeout: 10000 }
      // );
    // }
//!!END_ADD

  //!!START SILENT
  useEffect(() => {
    const pollWeather = async (location) => {
  //!!END
    //!!ADD
    // pollWeather = async (location) => {
    //!!END_ADD
      let url = 'http://api.openweathermap.org/data/2.5/weather?';

      /* Remember that it's unsafe to expose your API key. (Note that pushing
      files that include your key to Github will expose your key!) In
      production, you would definitely save your key in an environment variable,
      so do that here. Since this project runs in your local environment
      (localhost), save your key as an environment variable in a .env file in
      the root directory of your app. You can then access the key here as
      "process.env.<variable_name>". Make sure to .gitignore your .env file!
      Also remember to restart your server (i.e., re-run "npm run dev") whenever
      you change your .env file. */
      //!!START SILENT
      const apiKey = process.env.REACT_APP_WEATHER_API;
      //!!END
      //!!ADD
      // const apiKey = '???';
      //!!END_ADD

      const params = {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        appid: apiKey
      };
      
      url += toQueryString(params);

      const res = await fetch(url);
      if (res.ok) {
        const weather = await res.json();
        //!!START SILENT
        setWeather(weather);
        //!!END
        //!!ADD
        // this.setState({ weather });
        //!!END_ADD
      }
      else {
        alert ("Check Weather API key!")
      }
    }
  //!!START SILENT
  
    navigator.geolocation?.getCurrentPosition(
      pollWeather,
      (err) => console.log(err),
      { timeout: 10000 }
    );
  }, []);
  //!!END

  //!!ADD
  // render() {
    // const weather = this.state.weather;
  //!!END_ADD
    let content = <div className='loading'>loading weather...</div>;
    
    if (weather) {
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = (
        <div>
          <p>{weather.name}</p>
          <p>{temp.toFixed(1)} degrees</p>
        </div>
      );
    }
    else {
      content = (
        <div>
          Weather is currently unavailable. (Are Location Services enabled?) 
        </div>
      )
    }

    return (
      <section className="weather-section">
        <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
      </section>
    );
  //!!ADD
  // }
  //!!END_ADD
}

export default Weather;
