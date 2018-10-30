import { auth } from './firebase';

//Sign up
export const doCreateUserWithEmailAndPassword = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/weak-password') {
      alert('Password too weak');
    } else {
      alert(errorMessage);
    }

    console.error(error);
  });
};

//Sign in
export const doSignInWithEmailAndPassword = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong Password');
    } else {
      alert(errorMessage);
    }

    console.error(error);
  });
};

//Sign out
export const doSignOut = () => {
  auth.signOut();
};

//Password Reset
export const doPasswordReset = email => {
  auth.sendPasswordResetEmail(email);
};

//Password Change
export const doPasswordUpdate = password => {
  auth.currentUser.updatePassword(password);
};
