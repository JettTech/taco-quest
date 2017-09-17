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
if {onclick='start challenge'
//code for the elements of New Challenge
<section className='newChallenge'>
   <image source ''/>  //how do you syntax???
     <p>
       "Will You Taco Down?"
     <p/>
   <div>
<Button onClick={onClickAccept}
 title="Accept"
 accessibilityLabel="Accept the Taco Challenge by pressing this button"/>
     </div>
    <div>
<Button onClick={onClickDeny}
 title="Deny"
 accessibilityLabel= "Deny the Taco Challenge by pressing this button" />

</div>
   </section>
  if{

  }
}
else{

}    <section className=''>
      <img/>
      <p>
        "Will You Taco Down?"
      <p/>
      <div className 'button'>

      </div>
    </section>
  }
}
