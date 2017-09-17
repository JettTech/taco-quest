import React, { Component } from 'react'
import Location from '../location'
import Challenge from '../challenge'

export class Leaderboard extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      sortedPlaces: []
    }
  }

  render () {
    const {
      tacoPlaces
    } = this.props

    let renderedTacoPlaces = (tacoPlaces)
      ? renderedTacoPlaces = tacoPlaces.map((place, i) => {
        console.debug(place)
        return <Location key={place.id}
          rank={i + 1}
          name={place.name}
          // distance={...}
        />
      })
      : <div>No taco places :(</div>

    return (
      <section className='leaderboard'>
        <b>LEADERBOARD</b>
        <Challenge />
        {renderedTacoPlaces}
      </section>
    )
  }
}

export default Leaderboard
