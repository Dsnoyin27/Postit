
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyB-E2yAPMLAyPkGemOy2aWklm2goEMCSyM",
    authDomain: "postit-c25ee.firebaseapp.com",
    databaseURL: "https://postit-c25ee.firebaseio.com",
    projectId: "postit-c25ee",
    storageBucket: "postit-c25ee.appspot.com",
    messagingSenderId: "727727345984"
  };
  firebase.initializeApp(config);


module.exports = firebase;