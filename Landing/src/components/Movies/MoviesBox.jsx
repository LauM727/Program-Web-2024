import { Movies } from './Movies'
import './MoviesBox.css'

export function MoviesBox ({ movies, id }) {
  return (
    <>
      <h3>Movies</h3>

      <div className='moviesBox-container'>
        {
            movies.map((movies) => {
              return <Movies url={movies.url} key={movies.id} />
            })
          }
      </div>
    </>
  )
}
