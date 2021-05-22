import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAP0tkJIIG2J4eTmwA-tIba4q_JAbyPVzQ",
    authDomain: "weight-tracker-d37e2.firebaseapp.com",
    projectId: "weight-tracker-d37e2",
    storageBucket: "weight-tracker-d37e2.appspot.com",
    messagingSenderId: "224868616449",
    appId: "1:224868616449:web:24a32dac874a7056e63300"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
//  export default fire