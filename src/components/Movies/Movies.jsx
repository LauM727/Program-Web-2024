export function Movies (props) {
  const { url } = props
  return (
    <div className='movie-box'>
      <img src={url} />
    </div>
  )
}
