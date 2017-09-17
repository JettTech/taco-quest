import { Component } from 'react'
import button from '../general/button.js'

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
  render (){
    <section className=''>
      <img/>
      <p>
        "Will You Taco Down?"
      <p/>
      <div className 'button'>

      </div>
    </section>
  }
}
