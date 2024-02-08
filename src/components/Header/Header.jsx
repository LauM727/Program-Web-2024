import './Header.css'
import'./lupa.png'

const button=document.querySelector('.Arrow-image')
const nav=document.querySelector('Arrow-nav')


export function Header(){
    return(
        <>
        <section className="Navigation">
            <img Id="Logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"></img>
            <div Id="Explore-Left">
                <button Id="Home">Home</button>
                <button Id="TVShows">TV Shows</button>
                <button Id="Movies">Movies</button>
                <button Id="New">New & Popular</button>
                <button Id="List">My List</button>
                <button Id="Languages">Browse by Languages</button>
            </div>

        </section>
        <section className="Explore-Right">
                <button Id="Search"></button>
                <button Id="Kids">Kids</button>
                <button Id="Bell"></button>

                <div className="Profile-container">
                <button Id="Profile"></button>

                <button className="Arrow-image"></button>
                <nav className='Nav'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </nav>
                </div>

            </section>
        </>
    )
}