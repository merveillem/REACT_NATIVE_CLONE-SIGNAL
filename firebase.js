import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBf0AKWNAWMJLcDH3AIyUmheyx5bhSDPxk",
    authDomain: "signal-clone-yt-build-a20a6.firebaseapp.com",
    projectId: "signal-clone-yt-build-a20a6",
    storageBucket: "signal-clone-yt-build-a20a6.appspot.com",
    messagingSenderId: "469095830487",
    appId: "1:469095830487:web:e113aced16c238536f7192"
  };

  let app;
  
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app(); 
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };
  