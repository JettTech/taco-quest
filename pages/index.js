import React, { Component } from 'react'
import { CLIENT_ID, CLIENT_SECRET } from '../config/foursquare-keys.js'
import Challenge from '../components/challenge'
import axios from 'axios'
import _ from 'lodash'

import Leaderboard from '../components/leaderboard'
import base from '../components/general/rebase'
import Style from '../components/general/style'
import sheet from '../components/base.scss'

export class Layout extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      user: null,
      loading: true,
      tacoPlaces: []
    }
  }

  componentDidUpdate () {
    const { loading, tacoPlaces } = this.state
    if (loading && tacoPlaces) {

    }
  }

  componentDidMount () {
    this.updateUserData('nguyenkimsagmailcom')
    navigator.geolocation.getCurrentPosition(
      this.updateTacoData,
      (error) => {
        console.warn('If running on localhost, ignore this.\nDefaulting to Capital Factory coordinates.\n', error)
        if (error.code === 2) {
          const position = {
            coords: {
              latitude: '30.269',
              longitude: '-97.7406'
            }
          }

          this.updateTacoData(position)
        }
      }
    )
  }

  // pass in a user id, like `nguyenkimsagmailcom` to return all data for that user
  async updateUserData (userId) {
    let userData = await base.fetch(userId, {
      context: this,
      asArray: false,
      state: `user`,
      then: (data) => {
        this.setState({
          loading: false,
          user: data
        })

        return data
      }
    })

    console.debug('userData = ', userData)
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

  // pass in longitude and latitude to push all local taco places to state.
  updateTacoData (position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const url = `https://api.foursquare.com/v2/venues/search?ll=${latitude},${longitude}&categoryId=4bf58dd8d48988d151941735&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20170916`

    axios.get(url).then((res) => {
      const unsorted = res.data.response.venues
      const scoredPlaces = unsorted.map(place => {
        let newPlace = place
        newPlace.score = this.getLocationScore(place.id)
        return newPlace
      })

      const sortedPlaces = _.sortBy(scoredPlaces, ['score'])

      this.setState({
        tacoPlaces: sortedPlaces,
        loading: false
      })
    }).catch((err) => console.error(err))
  }

  render () {
    const {
      user,
      loading,
      tacoPlaces
    } = this.state

    if (loading) {
      return (<main>Loading...</main>)
    }

    if (user) {
      return (
        <main>
          <Style sheet={sheet} />
          <Challenge />
          <Leaderboard tacoPlaces={tacoPlaces} />
        </main>
      )
    } else {
      return (
        <main>
          LOCATION SCREEN
        </main>
      )
    }
  }
}

export default Layout
