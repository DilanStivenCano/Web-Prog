import { useEffect, useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { Filter } from '../Filter/Filter'
import Logo from '../../../assets/logo.png'
import './MovieCard.css'

export function MovieCard () {
    
    const {
        popularMovies,
        cinema,
        selectedFilter,
        groupedMoviesByJob,
        setSelectedFilter,
        handleMovieCardClick,
        fetchData,
    } = useUser();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className='moviecard--body'>
            <div className='singlecard'>
                <div class="flex justify-center">
                    <img src={Logo} alt="Logo" class='place-content-center w-1/2' />
                </div>

                <h2>Known For</h2>
                <div class="flex space-x-4 my-4">
                {popularMovies.map((destac) => (
                    <div key={destac.id} onClick={() => handleMovieCardClick(destac)}>
                        <img class="rounded-md"
                            src={`https://image.tmdb.org/t/p/w200${destac.posterPath}`}
                            alt={destac.title}
                        />
                        <h3>{destac.title}</h3>
                    </div>
                ))}
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
                            <div className='singlecard'>
                                <h2>{job}</h2>
                                <div className="grid grid-cols-5 gap-2">
                                    {movies.map((movie) => (
                                        <div key={movie.id} onClick={() => handleMovieCardClick(movie)} class="my-8">
                                            <img class="rounded-md"
                                                src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`}
                                                alt={`Portada de ${movie.title}`}
                                            />
                                            <h3>{movie.title}</h3>
                                            <p>{movie.job}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>        
    )
}