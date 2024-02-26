import { Anime } from './Anime'
import './AnimeBox.css'

export function AnimeBox ({ anime, id }) {
  return (
    <>
      <h3>Animes</h3>

      <div className='animeBox-container'>
        {
            anime.map((anime) => {
              return <Anime url={anime.url} key={anime.id} />
            })
          }
      </div>
    </>
  )
}
