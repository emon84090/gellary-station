import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((val) => setData(val))

    }, [])

    return { data }
};

export default useServices;