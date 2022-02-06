import {useState} from 'react';

import { formatDay, formatTimeString } from '../formatDateTime';
import eye from '../assets/eye.png';
import humidity from '../assets/humidity.png';
import moon from '../assets/moon.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import sunrise from '../assets/sunrise.png';
import sunset from '../assets/sunset.png';
import umbrella from '../assets/umbrella.png';
import uvindex from '../assets/uvindex.png';
import wind from '../assets/wind.png';

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
                <div className="icon_div">
                    <img className="icon" src={rain} alt="rain" />
                    <p className="data_p">{day.day.daily_chance_of_rain}%</p>
                </div>
                <div className="icon_div">
                    <img className="icon" src={sunrise} alt="sunrise" />
                    <p className="data_p">{formatTimeString(day.astro.sunrise)}</p>
                </div>
                <div className="icon_div">
                    <img className="icon" src={sunset} alt="sunrise" />
                    <p className="data_p">{formatTimeString(day.astro.sunset)}</p>
                </div>
            </div>}
            {expanded && <div className="expandedForecast">
                <div className="col" >
                    <div className="icon_div">
                        <img className="icon" src={sunrise} alt="sunrise" />
                        <p className="data_p">{formatTimeString(day.astro.sunrise)}</p>
                    </div>
                    
                    <div className="icon_div">
                        <img className="icon" src={rain} alt="rain" />
                        <p className="data_p">{day.day.daily_chance_of_rain}%</p>
                    </div>
                    <div className="icon_div">
                        <img className="icon" src={snow} alt="snow" />
                        <p className="data_p">{day.day.daily_chance_of_snow}%</p>
                    </div>
                    <div className="icon_div">
                        <img className="icon" src={umbrella} alt="umbrella" />
                        <p className="data_p">Total Precipitation: {day.day.totalprecip_in}"</p>
                    </div>
                    <div className="icon_div">
                        <img className="icon" src={humidity} alt="humidity" />
                        <p className="data_p">Humidity: {day.day.avghumidity}%</p>
                    </div>
                </div>
                <div className="col">
                    <div className="icon_div">
                        <img className="icon" src={sunset} alt="sunrise" />
                        <p className="data_p">{formatTimeString(day.astro.sunset)}</p>
                    </div>
                    <div className="icon_div">
                        <img className="icon" src={wind} alt="wind" />
                        <p className="data_p">Max Wind: {day.day.maxwind_mph} mph</p>
                    </div>
                    <div className="icon_div">
                        <img className="icon" src={eye} alt="eye" />
                        <p className="data_p">Visibility: {day.day.avgvis_miles} miles</p>
                    </div>
                    <div className="icon_div">
                        <img className="icon" src={uvindex} alt="uvindex" />
                        <p className="data_p">UV Index: {day.day.uv}</p>
                    </div>
                    <div className="icon_div">
                        <img className="icon" src={moon} alt="moon" />
                        <p className="data_p">{day.astro.moon_phase}</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}
