import SingleDayForecast from './SingleDayForecast';

function ThreeDayForecast({ forecast }) {
    return (
        <div className="forecast_div">
            <h2 className="forecast_h2">Three Day Forecast</h2>
            {forecast && forecast.map((day, i) => (
                <SingleDayForecast data={day} key={i} />
            ))}
        </div>
    )
}

export default ThreeDayForecast;