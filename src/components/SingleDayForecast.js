import {useState} from 'react';

import { formatDay, formatTimeString } from '../formatDateTime';

export default function SingleDayForecast({ day }) {
    const [expanded, SetExpanded] = useState(false)

    const handleClick = () => (
        SetExpanded(!expanded)
    )

    return (
        <div className="daily_div" onClick={handleClick}>
            <div className="weekday_div">
                <div className="dayName_div">
                    <img src={day.day.condition.icon} alt={day.day.condition.icon}></img>
                    <p className="day_p">{formatDay(day.date)}</p>
                </div>
                <div className="hiLo_div">
                    <p className="temp_p">High: <span className="temp_span">{Math.round(day.day.maxtemp_f)}&deg;</span></p>
                    <p className="temp_p">Low: <span className="temp_span">{Math.round(day.day.mintemp_f)}&deg;</span></p>
                </div>
            </div>
            {!expanded && <div className="rainSunset_div">
                <p className="data_p">Rain: {day.day.daily_chance_of_rain}%</p>
                <p className="data_p">UV Index: {day.day.uv}</p>
                <p className="data_p">Sunset: {formatTimeString(day.astro.sunset)}</p>
            </div>}
            {expanded && <div className="expandedForecast">
                <p className="data_p">Sunrise: {formatTimeString(day.astro.sunrise)}</p>
                <p className="data_p">Sunset: {formatTimeString(day.astro.sunset)}</p>
                <p className="data_p">Chance of Rain: {day.day.daily_chance_of_rain}%</p>
                <p className="data_p">Chance of Snow: {day.day.daily_chance_of_snow}%</p>
                <p className="data_p">Total Precipitation: {day.day.totalprecip_in}"</p>
                <p className="data_p">Max Wind: {day.day.maxwind_mph} mph</p>
                <p className="data_p">Humidity: {day.day.avghumidity}%</p>
                <p className="data_p">Visibility: {day.day.avgvis_miles} miles</p>
                <p className="data_p">UV Index: {day.day.uv}</p>
                <p className="data_p">Moon Phase: {day.astro.moon_phase}</p>
            </div>}
        </div>
    )
}
