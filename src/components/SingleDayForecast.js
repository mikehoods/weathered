import {useState} from 'react';

import { formatDay, formatTimeString } from '../formatDateTime';
import { Eye, Humidity, Moon, Rain, Snow, Sunrise, Sunset, Umbrella, UVIndex, Wind } from '../assets/icons';

import WeatherItem from './WeatherItem';

function SingleDayForecast({ data }) {
    const { astro, date, day } = data
    const [expanded, SetExpanded] = useState(false)

    const handleClick = () => (
        SetExpanded(!expanded)
    )

    return (
        <div className="daily_div" onClick={handleClick}>
            <div className="weekday_div">
                <div className="dayName_div">
                    <img src={day.condition.icon} alt={day.condition.icon}></img>
                    <p className="day_p">{formatDay(date)}</p>
                </div>
                <div className="hiLo_div">
                    <p className="temp_p">High: <span className="temp_span">{Math.round(day.maxtemp_f)}&deg;</span></p>
                    <p className="temp_p">Low: <span className="temp_span">{Math.round(day.mintemp_f)}&deg;</span></p>
                </div>
            </div>
            {!expanded && <div className="condensedForecast">
                <WeatherItem alt="rain" icon={Rain} text={`${day.daily_chance_of_rain}%`} />
                <WeatherItem alt="sunrise" icon={Sunrise} text={formatTimeString(astro.sunrise)} />
                <WeatherItem alt="sunset" icon={Sunset} text={formatTimeString(astro.sunset)} />
            </div>}
            {expanded && <div className="expandedForecast">
                <div className="col" >
                    <WeatherItem alt="sunrise" icon={Sunrise} text={formatTimeString(astro.sunrise)} />
                    <WeatherItem alt="rain" icon={Rain} text={`${day.daily_chance_of_rain}%`} />
                    <WeatherItem alt="snow" icon={Snow} text={`${day.daily_chance_of_snow}%`} />
                    <WeatherItem alt="umbrella" icon={Umbrella} text={`Total Precipitation: ${day.totalprecip_in}"`} />
                    <WeatherItem alt="humidity" icon={Humidity} text={`Humidity: ${day.avghumidity}%`} />
                </div>
                <div className="col">
                    <WeatherItem alt="sunset" icon={Sunset} text={formatTimeString(astro.sunset)} />
                    <WeatherItem alt="wind" icon={Wind} text={`Max Wind: ${day.maxwind_mph} mph`} />
                    <WeatherItem alt="eye" icon={Eye} text={`Visibility: ${day.avgvis_miles} miles`} />
                    <WeatherItem alt="uvindex" icon={UVIndex} text={`UV Index: ${day.uv}`} />
                    <WeatherItem alt="moon" icon={Moon} text={astro.moon_phase} />
                </div>
            </div>}
        </div>
    )
}

export default SingleDayForecast;