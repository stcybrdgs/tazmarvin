import ReachMeSignUp from './ReachMeSignUp'
import ReachMeContact from './ReachMeContact'
import './ReachMe.scss'

const ReachMe = () => {
  return (
    <div className='reach-me-wrapper'>
      {/* <h1>Reach Me</h1> */}
      <div className='reach-me-forms'>
        <ReachMeSignUp />
        <ReachMeContact />
      </div>
    </div>
  )
}

export default ReachMe

