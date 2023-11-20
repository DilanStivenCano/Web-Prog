import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fetchData from '../services/fetchData'
import { Filter } from './Filter'
import Burton from '../../assets/burton.png'
import Logo from '../../assets/logo.png'

export function MovieCard () {
    const navigate = useNavigate()
    const [selectedMovie, setSelectedMovie] = useState(null)

    const handleMovieCardClick = (movie) => {
        setSelectedMovie(movie);
        navigate('/detail', { state: { item: movie } });
    }

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
                        overview: destac.overview
                    }))
                
                    setPopularMovies(popularDirectorMovies)
                
                // Obtener todas las películas
                const allCrewMovies = combined_credits.crew.map((crewMember) => ({
                    id: crewMember.id,
                    title: crewMember.title,
                    posterPath: crewMember.poster_path,
                    job: crewMember.job || 'Not clear',
                    overview: crewMember.overview
                }));

                setCinema(allCrewMovies);
            })
            .catch((error) => {
                console.error("There aren't data: ", error);
            })
    }, [])

    const groupedMoviesByJob = cinema.reduce((acc, movie) => {
        const job = movie.job || 'Not clear';
        if (!acc[job]) {
            acc[job] = [];
        }
        acc[job].push(movie);
        return acc;
    }, {});

    return (
        <>
            <div class="flex">
                <img src={Burton} alt="Burton" class="w-1/3"/>
                <div>
                    <img src={Logo} alt="Logo" class='w-1/2' />

                    <h2>Known For</h2>
                    <div class="flex">
                    {popularMovies.map((destac) => (
                        <div key={destac.id} onClick={() => handleMovieCardClick(destac)}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${destac.posterPath}`}
                                alt={destac.title}
                            />
                            <h3>{destac.title}</h3>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Filter
                        groupedMoviesByJob={groupedMoviesByJob}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                    />
                </div>
                {Object.entries(groupedMoviesByJob)
                .sort(([, moviesA], [, moviesB]) => moviesB.length - moviesA.length)
                .map(([job, movies]) => (
                    <div key={job}>
                        {(!selectedFilter || selectedFilter === job) && (
                            <>
                                <h2>{job}</h2>
                                <div className="grid grid-cols-5 gap-2">
                                    {movies.map((movie) => (
                                        <div key={movie.id} onClick={() => handleMovieCardClick(movie)}>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`}
                                                alt={`Portada de ${movie.title}`}
                                            />
                                            <h3>{movie.title}</h3>
                                            <p>{movie.job}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>        
        </>
    )
}