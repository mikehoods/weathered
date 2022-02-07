import React from 'react'

import { formatHourly, currentHour } from '../formatDateTime';

function HourlyForecast({ data, hourly}) {
    return (
        <div className="hourly">
            {hourly && hourly.slice(currentHour(data.location.localtime), currentHour(data.location.localtime) + 24).map((hour, i) => (
                <div className="hour_div" key={i}>
                    <p className="hourly_time">{formatHourly(hour.time)}</p>
                    <img src={hour.condition.icon} alt={hour.condition.text}></img>
                    <p className="hourly_temp">{Math.round(hour.temp_f)}&deg;</p>
                </div>
            ))}
        </div>
    )
}

export default HourlyForecast;