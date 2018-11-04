import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import swal from 'sweetalert';

const prodConfig = {
  apiKey: 'AIzaSyAzK34m6sQHAsj2iSYAi2w8nr-94ZnbkX0',
  authDomain: 'yodone-prod.firebaseapp.com',
  databaseURL: 'https://yodone-prod.firebaseio.com',
  projectId: 'yodone-prod',
  storageBucket: 'yodone-prod.appspot.com',
  messagingSenderId: '292652706716'
};

const devConfig = {
  apiKey: 'AIzaSyDPPfMltduYw4u2wlDSK1Qh48AuprtX1bc',
  authDomain: 'yodone-882b6.firebaseapp.com',
  databaseURL: 'https://yodone-882b6.firebaseio.com',
  projectId: 'yodone-882b6',
  storageBucket: 'yodone-882b6.appspot.com',
  messagingSenderId: '145491458490'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

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
