import MusicAlbumsCarousel from './MusicAlbumsCarousel'

const titleStyle = {
  color: '#4b4221',
  fontWeight: 600,
  fontSize: '2.2em',
  fontFamily: 'fantasy',
}
const MusicAlbums = () => {
  return (
    <div className='wrapper'>
      <div className='albums-title' style={titleStyle}>
        Albums
      </div>
      <MusicAlbumsCarousel />
    </div>
  )
}

export default MusicAlbums

