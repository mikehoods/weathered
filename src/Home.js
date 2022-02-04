import { useState, useEffect } from 'react';

import CurrentDay from './components/CurrentDay';
import { formatTime } from './formatDateTime';
import Header from './components/Header';
import ThreeDayForecast from './components/ThreeDayForecast';
import useFetch from './useFetch';

const Home = () => {
    const [http, SetHttp] = useState('https://api.weatherapi.com/v1/forecast.json?key=085fc788f90f4c55af7214215210710&days=3&q=')
    const [location, setLocation] = useState('Austin, TX');
    const [url, setUrl] = useState(http + location)

    const { data, isLoading, error } = useFetch(url)

    const [conditionIcon, setConditionIcon] = useState(null);
    const [conditionText, setConditionText] = useState(null);
    const [current_temp_f, setCurrent_temp_f] = useState(null);
    const [feelslike_f, setFeelslike_f] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [hourly, setHourly] = useState(null);
    const [localtime, setLocalTime] = useState(null);
    const [name, setName] = useState(null);
    const [region, setRegion] = useState(null);

    useEffect(() => {
        if (data) {
            console.log(data)
            setConditionIcon(data.current.condition.icon)
            setConditionText(data.current.condition.text)
            setCurrent_temp_f(Math.round(data.current.temp_f))
            setFeelslike_f(Math.round(data.current.feelslike_f))
            setForecast(data.forecast.forecastday)
            setHourly([...data.forecast.forecastday[0].hour, ...data.forecast.forecastday[1].hour])
            setLocalTime(formatTime(data.location.localtime))
            setName(data.location.name)
            setRegion(data.location.region)
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