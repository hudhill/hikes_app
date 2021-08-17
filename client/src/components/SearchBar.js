const SearchBar = ({getHikesByDifficulty, resetHikes}) => {

  const reset = (event) => {
    event.preventDefault()
    resetHikes()
  }

  const difficultyRatings = ["easy", "moderate", "strenuous", "severe", "scramble", "gear suggested"]

  return (
    <>
    <div className="search-bar">
      <p>Search by difficulty: </p>
      <select onChange={getHikesByDifficulty}>
        <option default value="" selected disabled>Select a Difficulty</option>
        {difficultyRatings.map((rating)=>{
          return <option key={rating} value={rating}>{rating}</option>
        })}
      </select>  
      <button onClick={reset}>Reset Search</button>
    </div>
    </>
  )

}

export default SearchBar;