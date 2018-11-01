import React from 'react';
import { auth } from '../firebase/firebase';

const SignOutButton = () => {
  const onClickHandler = async () => {
    await auth.signOut();
  };
  return (
    <button type="button" onClick={onClickHandler}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
