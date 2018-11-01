import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDPPfMltduYw4u2wlDSK1Qh48AuprtX1bc',
  authDomain: 'yodone-882b6.firebaseapp.com',
  databaseURL: 'https://yodone-882b6.firebaseio.com',
  projectId: 'yodone-882b6',
  storageBucket: 'yodone-882b6.appspot.com',
  messagingSenderId: '145491458490'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const auth = firebase.auth();

export { auth, db };
