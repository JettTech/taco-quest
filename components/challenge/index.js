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

  class Input extends React.Component {
    render() {
        return (
            <button value="Start" />
        );
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


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputList: []};
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }

    onAddBtnClick(event) {
        const inputList = this.state.inputList; //add our inputs
        this.setState({
            inputList: inputList.concat(<Input key={inputList.length} />)
        });
    }

  render() {
        return (
            <div>
                <button onClick={this.onAddBtnClick}>Add input</button>
                {this.state.inputList.map(function(input, index) {
                    return {input}   
                })}
            </div>
        );
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById("form")
);
  

  startChallenge ()
  const start = <button>
    
        <div onClick = {() => {
  }}/>
  
  
  //Rendering -> if tests begin..
render (){
    if (startChallenge) return startChallenge //create variable for Start Challenge
    else () {
}

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
  }
}

 //code for the elements of Empty State

  constructor (props, context) {
    super(props, context)
    this.state = {
      sortedPlaces: [],
      loading: true
    }
  }