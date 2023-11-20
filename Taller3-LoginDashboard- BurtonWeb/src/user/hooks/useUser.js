import { useState, useEffect } from 'react';
import fetchData from '../services/fetchData';
import { useNavigate } from 'react-router-dom';

export const useUser = () => {
    const navigate = useNavigate();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [popularMovies, setPopularMovies] = useState([]);
    const [cinema, setCinema] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [jobOptions, setJobOptions] = useState([]);

    useEffect(() => {
        fetchData()
            .then(({ combined_credits }) => {
                console.log('Créditos combinados:', combined_credits);

                const uniqueJobs = [...new Set(combined_credits.crew.map((member) => member.job))];
                setJobOptions(uniqueJobs);

                const popularDirectorMovies = combined_credits.crew
                    .filter((credit) => credit.job === 'Director' && credit.popularity > 50)
                    .slice(0, 10)
                    .map((destac) => ({
                        id: destac.id,
                        title: destac.title,
                        posterPath: destac.poster_path,
                        overview: destac.overview,
                        genre_ids: destac.genre_ids,
                        vote_average: destac.vote_average,
                        release_date: destac.release_date
                    }))
                
                    setPopularMovies(popularDirectorMovies)
                
                // Obtener todas las películas
                const allCrewMovies = combined_credits.crew.map((crewMember) => ({
                    id: crewMember.id,
                    title: crewMember.title,
                    posterPath: crewMember.poster_path,
                    job: crewMember.job || 'Not clear',
                    overview: crewMember.overview,
                    genre_ids: crewMember.genre_ids,
                    vote_average: crewMember.vote_average,
                    release_date: crewMember.release_date
                }));

                setCinema(allCrewMovies);
            })
            .catch((error) => {
                console.error("There aren't data: ", error);
            })
    }, [])

    const handleMovieCardClick = (movie) => {
        setSelectedMovie(movie);
        navigate('/detail', { state: { item: movie } });
    }

    const groupedMoviesByJob = cinema.reduce((acc, movie) => {
        const job = movie.job || 'Not clear';
        if (!acc[job]) {
            acc[job] = [];
        }
        acc[job].push(movie);
        return acc;
    }, {});

    return {
        selectedMovie,
        setSelectedMovie,
        popularMovies,
        setPopularMovies,
        cinema,
        setCinema,
        selectedFilter,
        setSelectedFilter,
        groupedMoviesByJob,
        handleMovieCardClick,
        fetchData,
        jobOptions
    }
}