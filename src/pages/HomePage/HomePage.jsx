import { getTrendingMovies } from "api/movie-api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => { 
        const fetchTrendingMovies = async () => {
            const { results } = await getTrendingMovies();
            setMovie(results);

                console.log(setMovie(results))
        };

        fetchTrendingMovies();
    }, []);


    return (
    <>
        <h1>Trending today</h1>
            {movie.map(film => (
                    <ul key={film.id}>
                    <li>
                        <Link to={`${film.id}`}><p>{film.title}</p></Link>
                        </li>
                    </ul>
             )
        )}
    </>
    )
};

export default Home;