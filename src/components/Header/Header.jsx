import './Header.css'

export function Header(){

    return(
        <>
        <section className="Navigation">
            <div className="Explore-Left">
                <img Id="Logo" src="https://files.cults3d.com/uploaders/27512146/illustration-file/4cd53c3b-bd3c-4cf1-999e-e9160186fbd0/Netflix-logo.png"></img>
                <button Id="Home">Home</button>
                <button Id="TVShows">TV Shows</button>
                <button Id="Movies">Movies</button>
                <button Id="New">New & Popular</button>
                <button Id="List">My List</button>
                <button Id="Languages">Browse by Languages</button>
            </div>

            <div className="Explore-Right">
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
            </div>

        </section>
        </>
    )
}
