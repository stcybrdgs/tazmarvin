import { useState } from 'react'
import './ReachMeContact.scss'

const ReachMeContact = () => {
  // using useState to handle defaultValue error
  // while working with textarea in React
  const [text, setText] = useState('')

  return (
    <div className='reachme-contact-wrapper'>
      <h1>Contact Me</h1>
      <input type='text' placeholder='Name' />
      <input type='text' placeholder='Email' />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        name='Comment'
        placeholder='Write me a note...'
      />
      <button>Submit</button>
    </div>
  )
}

export default ReachMeContact

