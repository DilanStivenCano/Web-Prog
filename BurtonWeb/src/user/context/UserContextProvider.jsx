import { UserContext } from "./UserContext"
import { useState, useContext } from 'react';

export function UserContextProvider ({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [cinema, setCinema] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [groupedMoviesByJob, setGroupedMoviesByJob] = useState({});

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

export const useUserContext = () => {
  return useContext(UserContext);
};
