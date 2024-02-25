import './Footer.css'

export function Footer () {
  return (
    <section>
      <div className='button-container'>
        <button className='facebook' />
        <button className='instagram' />
        <button className='twitter' />
        <button className='youtube' />
      </div>

      <div className='container'>
        <div className='Colum1'>
          <a>Audio Description</a>
          <a>Investor Relations</a>
          <a>Legal Notices</a>
        </div>

        <div className='Colum2'>
          <a>Help Center</a>
          <a>Jobs</a>
          <a>Cookie Preferences</a>
        </div>

        <div className='Colum3'>
          <a>Gift Cards</a>
          <a>Terms of use</a>
          <a>Corporate information</a>
        </div>
      </div>
    </section>
  )
}
