import { seriesData } from "../../Data/seriesdata"
import { SeriesBox } from "./Series/SeriesBox"

const seriesdata = seriesData

export function Body(){
    return(
        <main id="main">
            <SeriesBox tittle="Animated"
            series={seriesdata}
            ></SeriesBox>

        </main>
    )
}