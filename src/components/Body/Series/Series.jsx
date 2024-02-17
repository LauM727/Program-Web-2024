export function Series(props){
    const{url}=props
    return(
        <div id="seriesBox">
            <img src={url}/>
        </div>
    )
}