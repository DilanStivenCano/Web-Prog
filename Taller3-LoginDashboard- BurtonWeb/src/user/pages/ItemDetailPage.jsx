import { useLocation, useNavigate } from "react-router-dom"
import '../../user/pages/ItemDetailPage.css'

export function ItemDetailPage () {
    const location = useLocation()
    const navigate = useNavigate()

    const { state } = location

    if (!state || !state.item) {
        return <div>No movie selected</div>
    }

    const { title, overview, posterPath, genre_ids, vote_average, release_date } = state.item

    const handleOnClick = () => {
        navigate('/dashboard');
    }

    return (
        <div className="movie-details">
    <h2 className="movie-title">{title}</h2>
    <img className="movie-poster"
        src={`https://image.tmdb.org/t/p/w200${posterPath}`}
        alt={title}
        
    />
    <p className="movie-info">Genre: {genre_ids}</p>
    <p className="movie-info">Popularity: {vote_average}</p>
    <p className="movie-info">Release Date: {release_date}</p>
    <p className="movie-overview">{overview}</p>
    <button className="go-back-button" onClick={handleOnClick}>
        Go back
    </button>
</div>

)}