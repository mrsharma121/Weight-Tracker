import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD7dNhBsKOFdd3fa4Cw6kKeWyoqWFO8oWk",
    authDomain: "tryout-d5bcb.firebaseapp.com",
    projectId: "tryout-d5bcb",
    storageBucket: "tryout-d5bcb.appspot.com",
    messagingSenderId: "986775113639",
    appId: "1:986775113639:web:a42679e10461a15ae0b082",
    measurementId: "G-ECYRV9KNTC"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;