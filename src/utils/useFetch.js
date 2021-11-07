import React from 'react';

export default (url, options) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const res = await fetch(url, options);
                const json = await res.json();

                setResponse(json);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { response, error, isLoading };
};