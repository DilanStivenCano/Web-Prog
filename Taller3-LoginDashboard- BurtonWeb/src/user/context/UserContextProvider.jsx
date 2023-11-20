import { UserContext } from "./UserContext"
import { useState, useEffect } from 'react';
import fetchData from '../services/fetchData';

export function UserContextProvider ({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [cinema, setCinema] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [groupedMoviesByJob, setGroupedMoviesByJob] = useState({});

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

  return (
    <UserContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        popularMovies,
        setPopularMovies,
        cinema,
        setCinema,
        selectedFilter,
        setSelectedFilter,
        groupedMoviesByJob,
        setGroupedMoviesByJob,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
