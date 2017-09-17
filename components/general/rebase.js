import apiKey from '../../config/firebase-api-key.js'
import firebase from 'firebase'
import Rebase from 're-base'

const config = {
  apiKey: apiKey,
  authDomain: 'taco-quest.firebaseapp.com',
  databaseURL: 'https://taco-quest.firebaseio.com',
  projectId: 'taco-quest'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

let base = Rebase.createClass(firebase.apps[0].database())
export default base
