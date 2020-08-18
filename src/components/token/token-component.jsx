import React from 'react'
import '../token/token-style.css'

const Token = props => {
  return (
    <div>
      <form className='form-style'>
        <input className='form-input' type='text' placeholder='Enter auth token' onChange={props.saveToken} />
      </form>
    </div>

  )
}

export default Token
