import React, { Component } from 'react'
import './paginate-style.css'

class Pagination extends Component {
  render () {
    const { nextPage, prevPage } = this.props

    return (
      <div className='paginate'>
        <div className='page-item'>
          <a href='#' className='btn-page' onClick={() => prevPage()}>Prev</a>
        </div>
        <div className='page-item'>
          <a href='#' className='btn-page' onClick={() => nextPage()}>Next</a>
        </div>
      </div>
    )
  }
}

export default Pagination
