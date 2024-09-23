import './BannerHero.scss'

const imageUrl =
  'https://media.istockphoto.com/id/1876957378/photo/a-wall-full-of-acoustic-guitars-of-different-models-and-types-of-wood-guitars-store.jpg?s=1024x1024&w=is&k=20&c=SFDZ-f4CCrfmiRl-s8qpUTjq5OLIfLUX2unf-3gL9Fc='

const BannerHero = () => {
  return (
    <div
      className='wrapper banner-hero'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      Heros are herw
    </div>
  )
}

export default BannerHero

