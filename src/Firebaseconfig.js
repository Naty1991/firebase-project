import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyBx44TarQBy62XvJZrbhPYDQMFokdEjas0",
    authDomain: "reactfirebase-490b4.firebaseapp.com",
    projectId: "reactfirebase-490b4",
    storageBucket: "reactfirebase-490b4.appspot.com",
    messagingSenderId: "511897401407",
    appId: "1:511897401407:web:7156c8e9fb037e3337208a"
        
      };
//inicializamos firebase con const fire
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()

export  {auth}