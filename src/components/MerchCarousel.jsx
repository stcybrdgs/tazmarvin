import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MerchCarousel.scss'

const merchItems = [
  {
    id: 0,
    title: 'Cup',
    imageUrl:
      'https://clipart.com/thumbs.php?f=/073/batch_01/cafe_design_tnb.png',
  },
  {
    id: 1,
    title: 'Hat',
    imageUrl:
      'https://clipart.com/thumbs.php?f=/1500/batch_18/001500-0018-000003_tnb.png',
  },
  {
    id: 2,
    title: 'Journal',
    imageUrl:
      'https://clipart.com/thumbs.php?f=/072/batch_01/note_paper_pencil_tnb.png',
  },
  {
    id: 3,
    title: 'Book',
    imageUrl:
      'https://clipart.com/thumbs.php?f=/602/batch_01/191114_21_ym9vaybslmpwzw_tnb.png',
  },
  {
    id: 4,
    title: 'Guitar Picks',
    imageUrl: 'https://clipart.com/thumbs.php?f=/176/batch_03/cir_2_tnb.png',
  },
]

function MerchCarousel() {
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
        {merchItems.map((item) => {
          return (
            <div className='merch-container' key={`${item.title}-${item.id}`}>
              <div className='merch-item'>
                <span className='merch-item-title'>{item.title}</span>
                <img src={item.imageUrl} alt='' />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default MerchCarousel

