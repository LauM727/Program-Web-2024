export function Series (props) {
  const { url } = props
  return (
    <div className='serie-box'>
      <img src={url} />
    </div>
  )
}
