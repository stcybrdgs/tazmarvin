const getYear = () => {
  return '2024'
}

const FooterInfo = () => {
  return (
    <div className='wrapper'>
      <i className='fa-solid fa-copyright'></i>
      <span>{getYear()} Taz Marvin</span>
    </div>
  )
}

export default FooterInfo

