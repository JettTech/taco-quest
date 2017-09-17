import { Component } from 'react'
import Style from '../general/style'
import sheet from './challenge.scss'

export class Challenge extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      sortedPlaces: [],
      loading: true
    }
  }

  getContenders () {
    const { tacoPlaces } = this.props
    const last = tacoPlaces.length - 2
    const n = (Math.floor(Math.random() * last))
    const firstContender = tacoPlaces[n]
    const secondContender = tacoPlaces[n + 1]
    return [firstContender, secondContender]
  }

  render () {
    if (this.state.section === 'new') {
      return (
        <section className='challenge--new'>
          <Style sheet={sheet} />
          <img />
          <p>Will You Taco Down?</p>

          <div>
            <div className='button' onClick={() => {
              // todo: add challenge to user
              this.setState({
                section: 'active'
              })
            }}
              title='Accept'
              accessibilityLabel='Accept the Taco Challenge by pressing this button' />
            <div className='button' onClick={() => {
              this.refreshOptions()
            }}
              title='Refresh'
              accessibilityLabel='Get a new Taco Challenge by pressing this button' />
          </div>
        </section>
      )
    } else if (this.state.section === 'active') {
      return (
        <section className='challenge--active'>
          <Style sheet={sheet} />
          Active challenge screen
        </section>
      )
    } else {
      return (
        <section className='challenge--none'>
          <Style sheet={sheet} />
          Start a new challenge screen
        </section>
      )
    }
  }
}

export default Challenge
