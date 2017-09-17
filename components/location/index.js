import React, { Component } from 'react'
import Style from '../general/style'
import sheet from './location.scss'

export class Location extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
    }
  }

  render () {
    console.info(this.props)
    const {
      name,
      rank
    } = this.props

    return (
      <article className='location--container'>
        <Style sheet={sheet} />
        <div className='location--rank'>{rank}</div>
        <div className='location--body'>
          <h3 className='location--name'>{name}</h3>
        </div>
      </article>
    )
  }
}

export default Location
