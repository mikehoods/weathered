import { useState, useEffect } from 'react';

import useFetch from './useFetch';
import { formatTime } from './formatDateTime';
import CurrentDay from './components/CurrentDay';
import Header from './components/Header';
import ThreeDayForecast from './components/ThreeDayForecast';

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
    const [hourly, setHourly] = useState(null);
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
            setCurrent_temp_f(Math.round(data.current.temp_f))
            setFeelslike_f(Math.round(data.current.feelslike_f))
            setHourly([...data.forecast.forecastday[0].hour, ...data.forecast.forecastday[1].hour])
            setHumidity(data.current.humidity + '%')
            setConditionIcon(data.current.condition.icon)
            setConditionText(data.current.condition.text)
            setForecast(data.forecast.forecastday)
        }
    }, [data])

    return (
        <div className="copyright_wrapper">
            {error && <h3>{error.message}</h3>}
            {isLoading && <h3>Loading...</h3>}

            {data && <div className="home_div">
                <Header setUrl={setUrl} location={location} setLocation={setLocation} http={http} />
                <div className="main_div">
                    <CurrentDay 
                        conditionIcon={conditionIcon}
                        conditionText={conditionText}
                        current_temp_f={current_temp_f}
                        data={data}
                        feelslike_f={feelslike_f}
                        hourly={hourly}
                        localtime={localtime}
                        name={name}
                        region={region}
                    /> 
                </div>
                <ThreeDayForecast forecast={forecast} />
            </div>}
            <p className="copyright_p">&copy; 2021 Mike Hood</p>
        </div>
    )
}

export default Home;