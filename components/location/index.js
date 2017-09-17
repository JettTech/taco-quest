import React, { Component } from 'react'

export class Location extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
    }
  }

  render () {
    console.info(this.props)
    return <div>Location here</div>
  }
}

export default Location
