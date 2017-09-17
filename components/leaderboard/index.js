import React, { Component } from 'react'
import Location from '../location'

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
      ? renderedTacoPlaces = tacoPlaces.map((place) => {
        return <Location key={place.id}
          stars={place.stars}
          name={place.name}
          // distance={...}
        />
      })
      : <div>No taco places :(</div>

    return (
      <section className='leaderboard'>
        LEADERBOARD
        {renderedTacoPlaces}
      </section>
    )
  }
}

export default Leaderboard
