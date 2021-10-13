import useFetch from './useFetch';
import { formatDay, formatTime } from './useFormat';
import { useState, useEffect } from 'react';

const Home = () => {
    const [location, setLocation] = useState('78745');
    const [http, SetHttp] = useState('https://api.weatherapi.com/v1/forecast.json?key=085fc788f90f4c55af7214215210710&days=3&q=')
    const [url, setUrl] = useState(http + location)

    const { data, isLoading, error } = useFetch(url)

    const [name, setName] = useState(null);
    const [region, setRegion] = useState(null);
    const [localtime, setLocalTime] = useState(null);
    const [current_temp_f, setCurrent_temp_f] = useState(null);
    const [feelslike_f, setFeelslike_f] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [conditionIcon, setConditionIcon] = useState(null);
    const [conditionText, setConditionText] = useState(null);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        if (data) {
            console.log(data)
            setName(data.location.name)
            setRegion(data.location.region)
            setLocalTime(formatTime(data.location.localtime))
            setCurrent_temp_f(data.current.temp_f)
            setFeelslike_f(data.current.feelslike_f)
            setHumidity(data.current.humidity + '%')
            setConditionIcon(data.current.condition.icon)
            setConditionText(data.current.condition.text)
            setForecast(data.forecast.forecastday)
        }
    }, [data])

    return (
        data && <div className="home_div">
            <div className="header_div">
                <h1>Weathered</h1>
                <form className="search_form" onSubmit={(e) => {e.preventDefault(); setUrl(http + location)}}>
                    <input type='text' value={location} onChange={(e) => {setLocation(e.target.value)}}></input>
                    <input type='submit' value="Search By Zip Code" ></input>
                </form>
            </div>
            <div className="main_div">
                <div className="current_div">
                    <div className="locationHeader_div">
                        <div className="condition_div">
                            <img src={conditionIcon} alt={conditionText}></img>
                            <div className="name_div">
                                <h3>{name}, {region}</h3>
                                <p>{localtime}</p>
                            </div>
                        </div>
                        <div className="temps_div">
                            <p className="temp_p">Current: <span className="temp_span">{current_temp_f}</span></p>
                            <p className="temp_p">Feels Like: <span className="temp_span">{feelslike_f}</span></p>
                        </div>
                    </div>
                    <div className="condition_div">
                        <p>Condition: {conditionText}</p>
                        <p>Humidity: {humidity}</p>
                    </div>
                </div> 
            </div>
            <div className="forecast_div">
                <h2 className="forecast_h2">Three Day Forecast</h2>
                {forecast && forecast.map((day, i) => (
                    <div className="daily_div" key={i}>
                        <div className="weekday_div">
                            <div className="dayName_div">
                                <img src={day.day.condition.icon} alt={day.day.condition.icon}></img>
                                <p className="day_p">{formatDay(day.date)}</p>
                            </div>
                            <div className="hiLo_div">
                                <p className="temp_p">High: <span className="temp_span">{day.day.maxtemp_f}</span></p>
                                <p className="temp_p">Low: <span className="temp_span">{day.day.mintemp_f}</span></p>
                            </div>
                        </div>
                        <div className="rainSunset_div">
                            <p>Rain: {day.day.daily_chance_of_rain}%</p>
                            <p>UV Index: {day.day.uv}</p>
                            <p>Sunset: {day.astro.sunset}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Home;