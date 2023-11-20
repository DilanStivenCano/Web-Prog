import '../Filter/Filter.css'

export function Filter ({ groupedMoviesByJob, selectedFilter, setSelectedFilter }) {
    return (
        <div className="flex justify-around">
            <form className='formFilter'>
                <select
                    name="filter"
                    id="filter"
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                >
                    <option value="">All Results</option>
                    {Object.keys(groupedMoviesByJob)
                        .sort()
                        .map((job, index) => (
                            <option key={index} value={job}>
                                {job}
                            </option>
                        ))}
                </select>
            </form>
        </div>
    )
}