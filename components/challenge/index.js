import { Component } from 'react'

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
          <img />
          <p>Will You Taco Down?</p>

          <div>
            <div className='button' onClick={() => {
              // todo: add challenge to user
              this.setState({
                section: 'active'
              })
            }}
              title='Accep'
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
      return (<div>Active challenge screen</div>)
    } else {
      return (<div>Start a new challenge screen</div>)
    }
  }
}

export default Challenge
