import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import swal from 'sweetalert';

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
db.enablePersistence().catch(function(err) {
  if (err.code === 'failed-precondition') {
    swal('Too many tabs open', 'Please close other tabs', 'error');
  } else if (err.code === 'unimplemented') {
    swal(
      'Persistence not enabled on your browser',
      'Please use a different one',
      'error'
    );
  }
});
const auth = firebase.auth();

export { auth, db };
