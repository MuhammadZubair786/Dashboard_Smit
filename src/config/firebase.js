import  firebase from 'firebase/compat/app'
import 'firebase/compat/database' 
import 'firebase/compat/auth' 
import 'firebase/compat/storage'


var firebaseConfig = {
  apiKey: "AIzaSyDn16dQhHLtVY3b91mM6kDrgBIO3WydDKM",
  authDomain: "smit-quiz-c1233.firebaseapp.com",
  databaseURL: "https://smit-quiz-c1233-default-rtdb.firebaseio.com",
  projectId: "smit-quiz-c1233",
  storageBucket: "smit-quiz-c1233.appspot.com",
  messagingSenderId: "30033922413",
  appId: "1:30033922413:web:f8fcbf66432b442e103264"
  };
  
    // console.log(firebase.database)
  
  
   
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
    export const auth = firebase.auth()
    const storage =firebase.storage();
    const database=firebase.database()
  
    export {storage,database, firebase as default } 