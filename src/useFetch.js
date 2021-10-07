import { useState, useEffect } from 'react'

//Fetch API data
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error("Unable to fetch data")
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch