import { useEffect, useState } from 'react';

const useFetch = (path) => {
    const [data, setData] = useState();

    useEffect(() => {
        (async () => {

            const url = `https://api.foriio.com/api/v1/${path}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": "en-US"
            }});

            const json = await response.json();

            return setTimeout(() => setData(json, 1000));
        })();
    }, [path]);

    return data;
};

export default useFetch;
