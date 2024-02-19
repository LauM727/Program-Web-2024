import { SeriesData } from '../../Data/Seriesdata'
import { SeriesBox } from '../Series/SeriesBox'

const data = SeriesData

export function Body () {
  return (
    <main id='main'>
      <SeriesBox
        tittle='Animated'
        series={data}
      />

    </main>
  )
}
