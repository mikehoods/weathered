import useFetch from './useFetch';
import { useState, useEffect } from 'react';

const Home = () => {
    const { data, isLoading, error } = useFetch('https://api.weatherapi.com/v1/forecast.json?key=085fc788f90f4c55af7214215210710&q=78745&days=5')

    useEffect(() => {
        if (data) {
            console.log(data)
        }
    }, [data])

    return (
        <div>
            { data && <h2>The weather</h2> }
        </div>
    )
}

export default Home;