import React from 'react'
import '../cardList/cardlist-style.css'

import Card from '../card/card-component'

const CardList = (props) => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='card-list'>
          {props.forkUsers.map(forkUser => <Card key={forkUser.id} forkUser={forkUser} handleFollow={props.handleFollow} />)}
        </div>
      </div>
    </div>

  )
}

export default CardList
