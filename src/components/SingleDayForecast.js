import { formatDay } from '../formatDateTime';

export default function SingleDayForecast({ day }) {
    return (
        <div className="daily_div">
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
            <div className="rainSunset_div">
                <p className="data_p">Rain: {day.day.daily_chance_of_rain}%</p>
                <p className="data_p">UV Index: {day.day.uv}</p>
                <p className="data_p">Sunset: {day.astro.sunset}</p>
            </div>
        </div>
    )
}
