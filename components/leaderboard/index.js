import React, { Component } from 'react'import React, { Component } from 'react'
import Leaderboard from '../compnonets/leaderboard'

//<Leaderboard tacoPlaces = {res from 4^2}/>
//setState ({})

export class Leaderboard extends Component {
	constructor (props, context) {
		super (props, context)
		this.state {
			sortedPlaces: [],
			loading: true
		}
	}
}

async getLocationScore (locationId) {
	const score await base.fetch('location-score/${locationId', {
		context: this,
		asArray: false,
		then (reponse) => return response
	})
	if (score) return score
	else //todo: set default in firebase 
		//    --> return Default
}

componentWillReceiveProps (nextProps) {
	if(this.state.loading && nextProps.tacoPlaces) {
		const sortedTacoPlaces
		this.setState ({
			sortedPlaces: sortedTacoPlaces,
			loading: false
		})
	}
}

render () {
	const {
		loading,
		tacoPlaces
	} = this.state
}

if (loading) {
	return ('<div>LOADING</div>') //Do we need ot include the single quotes for designated the html part?  ALSO.. which libraies / how does react.js use/know in order for it to render the html automatixcally.
} else
	const renderedTacoPlaces = tacoPlaces.map((place) => {
		return <Location key = {place.id}
			stars = {place.stars}
			name = {place.name}
			// distance = {...}
		/>
	})
	return (
		<section className = /'leaderboard'> //What is going on with the syntax here?!?!?!
		/{renderedTacoPlaces}/
		</section>
	)
}

const scoredPlaces = tacoPlaces.map (place => {
	let newPlace = place
	newPlace = this.getLocationScore (placeId)
	return newPlace
})
const sortedPlaces = _.sortBy (scoredPlaces, ['score'])