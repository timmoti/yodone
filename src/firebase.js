import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDPPfMltduYw4u2wlDSK1Qh48AuprtX1bc',
  authDomain: 'yodone-882b6.firebaseapp.com',
  databaseURL: 'https://yodone-882b6.firebaseio.com',
  projectId: 'yodone-882b6',
  storageBucket: 'yodone-882b6.appspot.com',
  messagingSenderId: '145491458490'
};

const Firebase = firebase.initializeApp(config);

export default Firebase;
