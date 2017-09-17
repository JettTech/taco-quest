import { Component } from 'react'
import button from '../general/button.js'
import ReactDOM from "react-dom";

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
        <section className=''>
          <img />
          <p>
            "Will You Taco Down?"
          <p/>
          <div>
            <Button onClick={onClickAccept}
              title="Accept"
              accessibilityLabel="Accept the Taco Challenge by pressing this button"/>
            <Button onClick={onClickDeny}
              title="Deny"
              accessibilityLabel= "Deny the Taco Challenge by pressing this button" />
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