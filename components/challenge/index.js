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
  render (){

  }
}
