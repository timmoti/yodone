import React from 'react';
import { auth } from '../firebase/firebase';

const SignOutLink = () => {
  const onClickHandler = async () => {
    await auth.signOut();
  };
  return (
    <div className="action">
      <input
        type="submit"
        name="commit"
        value="Sign Out"
        onClick={onClickHandler}
        id="signout"
      />
    </div>
  );
};

export default SignOutLink;
