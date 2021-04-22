import firebase from "firebase" 

const firebaseConfig = {
    apiKey: "AIzaSyBEX_lhxb4s-ho5ItzLnWSlxS6ptbTUfhk",
    authDomain: "reactsocialapp-cae07.firebaseapp.com",
    projectId: "reactsocialapp-cae07",
    storageBucket: "reactsocialapp-cae07.appspot.com",
    messagingSenderId: "78023373266",
    appId: "1:78023373266:web:27d037f46fe981a91a980b"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider, storage };
