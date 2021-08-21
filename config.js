import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
    apiKey: "AIzaSyBEHwVvSeGwLdBU_iibD7pyBo5mnZZ7CP0",
    authDomain: "project-71-9ba74.firebaseapp.com",
    projectId: "project-71-9ba74",
    storageBucket: "project-71-9ba74.appspot.com",
    messagingSenderId: "1025253365315",
    appId: "1:1025253365315:web:aeb935a7d127ba0747a6f6"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

