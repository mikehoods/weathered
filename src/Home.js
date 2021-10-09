import useFetch from './useFetch';
import { useState, useEffect } from 'react';

const Home = () => {
    const { data, isLoading, error } = useFetch('https://api.weatherapi.com/v1/forecast.json?key=085fc788f90f4c55af7214215210710&q=78745&days=5')

    const [name, setName] = useState(null);
    const [region, setRegion] = useState(null);
    const [localtime, setLocalTime] = useState(null);
    const [current_temp_f, setCurrent_temp_f] = useState(null);
    const [feelslike_f, setFeelslike_f] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [conditionIcon, setConditionIcon] = useState(null);
    const [conditionText, setConditionText] = useState(null);

    const formatTime = (date) => {
        date = new Date(date);
        let hours = date.getHours();
        const ampm = hours >=12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} ${ampm}`
    }


    useEffect(() => {
        if (data) {
            console.log(data)
            setName(data.location.name)
            setRegion(data.location.region)
            setLocalTime(formatTime(data.location.localtime))
            setCurrent_temp_f(data.current.temp_f + ' F')
            setFeelslike_f(data.current.feelslike_f + ' F')
            setHumidity(data.current.humidity + '%')
            setConditionIcon(data.current.condition.icon)
            setConditionText(data.current.condition.text)
        }
    }, [data])

    return (
        data && <div>
            <h1>The Weather</h1>
            <h3>{name}, {region}</h3>
            <img src={conditionIcon} alt={conditionText}></img>
            <p>Condition: {conditionText}</p>
            <p>Local time: {localtime}</p>
            <p>Current Temp: {current_temp_f}</p>
            <p>Feels Like: {feelslike_f}</p>
            <p>Humidity: {humidity}</p>
            
        </div>
    )
}

export default Home;