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
            <button className="go-back-button" onClick={handleOnClick}>
                Go back
            </button>
            <div class="flex">
                <img className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w200${posterPath}`}
                    alt={title}
                    
                />
                <div class="m-10">
                <h2 className="movie-title">{title}</h2>
                <div class="mt-10">
                    <p className="movie-info">{vote_average}</p>
                    <p className="movie-info">{release_date}</p>
                </div>
                <p className="movie-overview">{overview}</p>
                </div>
            </div>
        </div>

)}