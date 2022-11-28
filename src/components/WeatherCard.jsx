import React, { useState } from "react";

const WeatherCard = ({ weather, temp }) => {
  console.log(temp);

  const [isCelsius, setIsCelsius] = useState(true)

  const handleClick = () =>  setIsCelsius(!isCelsius)

  

  return (
    <article className="card">
    <header className="card__header">
      <h1 className="card__tittle">Weather App</h1>
      <h2 className="card__subtittle">
        {weather?.name}, {weather?.sys.country}
      </h2>
    </header>


      <section className="card__icon-container">
        <img
          className="card__icon"
          src={
            weather &&
            `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
          }
          alt=""
        />
        <h3 className="card__temp"> 
        {
            isCelsius ? 
                `${temp?.celsius} °C` 
                : 

                `${temp?.fahrenheit} °F`
        } 
        </h3>
      </section>
      <section className="card__info">
        <h3 className="card__description">
          "{weather?.weather[0].description}"
        </h3>
        <ul className="card__list">
          <li className="card__item">
            <span className="card__spam">Wind Speed</span> {weather?.wind.speed} m/s
          </li>
          <li className="card__item">
            <span className="card__spam">Clouds</span> {weather?.clouds.all} %
          </li>
          <li className="card__item">
            <span className="card__spam">Presure</span> {weather?.main.pressure} hPa
          </li>
        </ul>
      </section>
        <footer className="card__footer">
          <button className="card__btn" onClick={handleClick}>Change to {isCelsius ? '°F' : '°C'}</button>

        </footer>
    </article>
  );
};

export default WeatherCard;
