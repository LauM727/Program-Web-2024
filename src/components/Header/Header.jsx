import './Header.css'

export function Header () {
  return (
    <>
      <section className='Navigation'>
        <div className='Explore-Left'>
          <img id='Logo2' src='https://cdnlogo.com/logos/n/75/netflix.svg' />
          <img id='Logo' src='https://files.cults3d.com/uploaders/27512146/illustration-file/4cd53c3b-bd3c-4cf1-999e-e9160186fbd0/Netflix-logo.png' />
          <button id='Home'>Home</button>
          <button id='TVShows'>TV Shows</button>
          <button id='Movies'>Movies</button>
          <button id='New'>New & Popular</button>
          <button id='List'>My List</button>
          <button id='Languages'>Browse by Languages</button>
        </div>

        <div className='Explore-Right'>
          <button id='Search' />
          <button id='Kids'>Kids</button>
          <button id='Bell' />

          <div className='Profile-container'>
            <button id='Profile' />

            <button className='Arrow-image' />
            <nav className='Nav'>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </nav>
          </div>
        </div>

      </section>
    </>
  )
}
