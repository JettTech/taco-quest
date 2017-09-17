import React, { Component } from 'react'
import base from '../general/rebase'
import Location from '../location'

export class Leaderboard extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      sortedPlaces: [],
      loading: true
    }
  }

  async getLocationScore (locationId) {
    const score = await base.fetch(`location-scores/${locationId}`, {
      context: this,
      asArray: false,
      then: (response) => response
    })

    if (score) return score
    else {
      const defaultScore = 0
      base.push('location-scores', {
        data: { [locationId]: defaultScore }
      }).catch(err => console.error(err))

      return defaultScore
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.loading && nextProps.tacoPlaces) {
      const scoredPlaces = nextProps.tacoPlaces.map(place => {
        let newPlace = place
        newPlace.score = this.getLocationScore(place.id)
        return newPlace
      })

      const sortedPlaces = _.sortBy(scoredPlaces, ['score'])

      this.setState({
        sortedPlaces,
        loading: false
      })
    }
  }

  render () {
    const {
      loading,
      tacoPlaces
    } = this.state

    if (loading) {
      return (<div>LOADING</div>)
    } else {
      const renderedTacoPlaces = tacoPlaces.map((place) => {
        return <Location key={place.id}
          stars={place.stars}
          name={place.name}
          // distance={...}
        />
      })
      return (
        <section className='leaderboard'>
          {renderedTacoPlaces}
        </section>
      )
    }
  }
}