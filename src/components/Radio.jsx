import RadioPlayer from './RadioPlayer'
import RadioSongMenu from './RadioSongMenu'
import './Radio.scss'

const Radio = () => {
  return (
    <>
      <h1>Taz Radio</h1>
      <div className='wrapper radio-wrapper'>
        <RadioPlayer />
        <RadioSongMenu />
      </div>
    </>
  )
}

export default Radio

