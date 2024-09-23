import MusicNavBtn from './MusicNavBtn'
import './MusicNav.scss'

const buttons = [{ name: 'Albums' }, { name: 'Songs' }, { name: 'Playlists' }]

const MusicNav = () => {
  return (
    <>
      <div className='music-nav-wrapper'>
        {buttons.map((btn, index) => {
          return <MusicNavBtn key={`${btn.name}-${index}`} name={btn.name} />
        })}
        {/* <MusicNavBtn />
        <MusicNavBtn /> */}
      </div>
    </>
  )
}

export default MusicNav

