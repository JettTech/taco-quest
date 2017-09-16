import React, { Component } from 'react'
import { CLIENT_ID, CLIENT_SECRET } from '../config/foursquare-keys.js'
import axios from 'axios'

import base from '../components/general/rebase'
import Loader from '../components/general/loader'
import Style from '../components/general/style'
import sheet from '../components/base.scss'
import Week from '../components/week/week'
import Day from '../components/day/day'

export class Layout extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      user: null,
      loading: true,
      tacoPlaces: [
        {
          name: 'Koala Tacos',
          price: 3
        }
      ]
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
  updateUserData (userId) {
    this.ref = base.fetch(userId, {
      context: this,
      asArray: false,
      state: `user`,
      then: (data) => {
        console.info(data)
        this.setState({
          loading: false,
          user: data
        })
      }
    })
  }

  // pass in longitude and latitude to push all local taco places to state.
  updateTacoData (position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const url = `https://api.foursquare.com/v2/venues/search?ll=${latitude},${longitude}&categoryId=4bf58dd8d48988d151941735&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20170916`

    axios.get(url).then((res) => {
      console.debug(res)
    }).catch((err) => {
      console.warn(err)
    })

    // TODO: sort by deliciousness
  }

  renderSection (section) {
    const {
      loading,
      selectedDay,
      [`timeline_${selectedDay.substring(0, 10)}`]: timeline
    } = this.state

    if (loading) return <Loader />

    switch (section) {
      case 'day': return (
        <Day
          timeline={timeline}
          selectedDay={selectedDay}
          updateDate={(selectedDay) => {
            this.updateDataFor(selectedDay.substring(0, 10))
            this.setState({ selectedDay })
          }}
        />
      )
      case 'week': return (
        <Week />
      )
      default: return (<div>Err</div>)
    }
  }

  render () {
    const {
      user,
      loading
    } = this.state

    if (loading) {
      return (<main>LOADING</main>)
    }

    if (user) {
      return (
        <main>
          <header>
            <h1>Taco Quest</h1>
            Kim really digs {user.favorite}.
            <Style sheet={sheet} />
          </header>
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
