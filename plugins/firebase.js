import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyB6ZSlP3R7aEUsXbJrhsIhQXcGNP7G6lWo',
    authDomain: 'creators-f9c1a.firebaseapp.com',
    databaseURL: 'https://creators-f9c1a.firebaseio.com',
    projectId: 'creators-f9c1a',
    storageBucket: 'creators-f9c1a.appspot.com',
    messagingSenderId: '110038871047'
  })
}

export default firebase
