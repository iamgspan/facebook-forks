import React from 'react'
import '../card/card-style.css'

const Card = (props) => {
  return (
    <div className='card-container'>
      <img className='user-image' alt='forkUser' src={`https://avatars.githubusercontent.com/${props.forkUser.owner.login}`} />
      <div className='user-details'>
        <h4>{props.forkUser.owner.login}</h4>
        <p>{props.forkUser.owner.html_url}</p>
      </div>
      <div>
        <FollowButton id={props.forkUser.owner.login} handleFollow={props.handleFollow} />
      </div>
    </div>

  )
}

const FollowButton = (props) => {
  return (
    <div>
      <a href='#' className='btn' id={props.id} onClick={props.handleFollow}> Follow </a>
    </div>
  )
}

export default Card
