import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const url = 'https://arcane-wave-11590.herokuapp.com/events';
                const { data } = await axios.get(url);
                setData(data);
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    return [data, setData, loading, error]
}

export default useFetch