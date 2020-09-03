import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAvHj6RiWhKcKcwzb8izIXRo0-RjErjP8A",
    authDomain: "slack-clone-3ac34.firebaseapp.com",
    databaseURL: "https://slack-clone-3ac34.firebaseio.com",
    projectId: "slack-clone-3ac34",
    storageBucket: "slack-clone-3ac34.appspot.com",
    messagingSenderId: "821298674635",
    appId: "1:821298674635:web:0f2005489ad6de406c144e"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export  {auth, provider};