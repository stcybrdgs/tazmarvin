import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MusicAlbumsCarousel.scss'

const albums = [
  {
    id: 0,
    title: 'Reach',
    imageUrl:
      'https://images.unsplash.com/photo-1533651402877-8ea087526e9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHJlYWNofGVufDB8fDB8fHww',
  },
  {
    id: 1,
    title: 'Dandelion',
    imageUrl:
      'https://images.unsplash.com/photo-1520548636995-ab410381561e?q=80&w=1314&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Remember',
    imageUrl:
      'https://images.unsplash.com/photo-1663892638815-7be9310a34f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ0fHxyZW1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    title: 'Breakthrough',
    imageUrl:
      'https://images.unsplash.com/photo-1530242269066-86e5a3a480ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrdGhyb3VnaHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    title: 'A Perfect Day',
    imageUrl:
      'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJmZWN0JTIwZGF5fGVufDB8fDB8fHww',
  },
]

function MusicAlbumsCarousel() {
  const slidesToShow = 3

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
  }
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {albums.map((album) => {
          return (
            <div className='album-container' key={album.id}>
              <div className='album'>
                <span className='album-title'>{album.title}</span>
                <img src={album.imageUrl} alt='' />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default MusicAlbumsCarousel

