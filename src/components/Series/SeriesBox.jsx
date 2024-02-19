import { Series } from './Series'
import './SeriesBox.css'

export function SeriesBox ({ series, id }) {
  return (
    <>
      <h3>Animation</h3>

      <div className='seriesBox-container'>
        {
            series.map((series) => {
              return <Series url={series.url} key={series.id} />
            })
          }
      </div>
    </>
  )
}
