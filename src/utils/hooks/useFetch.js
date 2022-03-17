import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const doFetch = async () => {
        try {
            const res = await fetch(url);
            const json = await res.json();
            setResponse(json);
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
        };
        doFetch();
    }, [url]);
    return { response, loading };
}