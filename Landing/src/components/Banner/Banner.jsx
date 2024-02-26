import './Banner.css'

export function Banner () {
  return (
    <section className='Banner'>
      <img className='spam' src='https://www.dreamworks.com/storage/shows/dragons-race-to-the-edge/gallery/dragons-race-to-the-edge-gallery-4.jpg' />
      <div className='info'>
        <img id='tittle' src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTKflmVD3P4nl7aUQ3uBwf_fT3I32uvegbOvWv-O9YC-6rApNNTlMoRJ56yCM8WGUSSQVfqhJnLc7pJ7GwqtKd6vGS9yG371vOTFh4wfGF3bsjtPE5t51SkAj6c5A7vQdLHG2reblI4NApUkM1UA3wnTKg-_3Y6Kbf0Q0dy8EmRRLas-PshJNw.png?r=5a8' />
        <span id='description'>Hiccup, Toothless and the rest of the Dragon Riders
          set up camp far from Berk and battle old enemies while discovering new
          dragons.
        </span>
        <div className='buttons'>
          <button id='play'>Play
          </button>

          <button id='more-info'>More Info</button>
        </div>
      </div>
    </section>
  )
}
