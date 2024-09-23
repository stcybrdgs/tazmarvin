import './Thoughts.scss'

const imageUrl =
  'https://media.istockphoto.com/id/1876957378/photo/a-wall-full-of-acoustic-guitars-of-different-models-and-types-of-wood-guitars-store.jpg?s=1024x1024&w=is&k=20&c=SFDZ-f4CCrfmiRl-s8qpUTjq5OLIfLUX2unf-3gL9Fc='

const Thoughts = () => {
  return (
    <div className='wrapper thoughts-wrapper'>
      <i className='fa-solid fa-chevron-left next-arrow'></i>
      <div className='thoughts-content'>
        <div
          className='thoughts-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          asdf
        </div>
        <div className='thought-body'>
          <span>Thoughts</span>
          <p>Stuff goes here</p>
        </div>
      </div>
      <i className='fa-solid fa-chevron-right next-arrow'></i>
    </div>
  )
}

export default Thoughts

