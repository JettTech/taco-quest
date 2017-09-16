import React, { Component } from 'react'

import base from '../components/general/rebase'
import Loader from '../components/general/loader'
import Selector from '../components/selector/selector'
import Style from '../components/general/style'
import sheet from '../components/base.scss'
import Week from '../components/week/week'
import Day from '../components/day/day'

export class Layout extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      loading: true,
      tacoPlaces: []
    }
  }

  componentDidMount () {
    this.updateData()
  }

  updateDataFor (date) {
    this.ref = base.fetch(`nguyenkimsagmailcom`, {
      context: this,
      asArray: false,
      state: `timeline_${date}`,
      then: (data) => {
      	console.info(data)	
        this.setState({
          loading: false,
          [`timeline_${date}`]: data
        })
      }
    })
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
    return (
      <main>
        <header>
          <h1>Gel</h1>

          <Selector
            defaultOption={'Day'}
            options={['Infinite', 'Week', 'Day']}
            updateSelected={(option) => {
              this.setState({ activeSection: option.toLowerCase() })
            }}
          />

          <Style sheet={sheet} />
        </header>

        { this.renderSection(this.state.activeSection) }
      </main>
    )
  }
}

export default Layout
