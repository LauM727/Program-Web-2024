export function Anime (props) {
  const { url } = props
  return (
    <div className='movie-box'>
      <img src={url} />
    </div>
  )
}
