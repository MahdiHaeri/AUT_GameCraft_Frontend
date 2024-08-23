// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (apiFunc, params = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiFunc(params);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiFunc, params]);

    return { data, loading, error };
};

export default useFetch;
