import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/foods')
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }


        fetchData()

    }, [])

    return {
        data,
        loading,
        error
    }


};

export default useFetch;