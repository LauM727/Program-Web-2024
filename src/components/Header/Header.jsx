import './Header.css'
import { useState } from 'react'

export function Header () {
  const [showMenu, setShowMenu] = useState(false)
  const [showArrowMenu, setShowArrowMenu] = useState(false)

  console.log('value:', showMenu)
  console.log('value:', showArrowMenu)

  const handleClick = (event) => {
    setShowMenu(!showMenu)
  }

  const handleArrowClick = (event) => {
    setShowArrowMenu(!showArrowMenu)
  }
  return (
    <>
      <section className='Navigation'>
        <div className='Explore-Left'>

          <button
            className={`Hamburger-Menu${!showMenu ? 'menu-open' : ''}`}
            onClick={handleClick}
          />
          {
            showMenu && (
              <ul className='menu-list'>
                <li>Home</li>
                <li>Movies</li>
                <li>Tv Shows</li>
              </ul>
            )
          }

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

          <button id='Profile' />

          <div className='Menu-Container'>
            <button
              className={`Arrow-image${!showArrowMenu ? 'arrow-open' : ''}`}
              onClick={handleArrowClick}
            />
            {
            showArrowMenu && (
              <ul className='options'>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            )
          }
          </div>

        </div>

      </section>
    </>
  )
}
