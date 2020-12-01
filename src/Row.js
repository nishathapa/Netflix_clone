import React, { useState, useEffect } from 'react'
import axios from './axios'

function Row( {title, fetchUrl} ) {

    const [movies, SetMovies] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData();
    }, [])


    return (
        <div>
            {/* title */}
            <h2>{title}</h2>

            {/* container = posters */}
        </div>
    )
}

export default Row
