import { SeriesData } from '../../Data/Seriesdata'
import { SeriesBox } from '../Series/SeriesBox'
import { MoviesBox } from '../Movies/MoviesBox'
import { MoviesData } from '../../Data/Moviesdata'
import { AnimeBox } from '../Anime/AnimeBox'
import { AnimeData } from '../../Data/AnimeData'

const data = SeriesData
const data2 = MoviesData
const data3 = AnimeData

export function Body () {
  return (
    <main id='main'>
      <SeriesBox
        tittle='Series'
        series={data}
      />
      <MoviesBox
        tittle='Movies'
        movies={data2}
      />
      <AnimeBox
        tittle='Anime'
        anime={data3}
      />

    </main>
  )
}
