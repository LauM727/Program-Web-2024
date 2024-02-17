import { Series } from "./Series";
import "./seriesBox.css"

export function SeriesBox({tittle, series}){
    return(
        <>
        <h3>{tittle}</h3>

        <div className="seriesBox">
            {
            series.map((serie)=>{
            return <Series url={serie.src}/>
            })
        }
            </div>
        </>
    )
}