import { db } from './firebase';

//User API

export const doCreateUser = (id, email) =>
  db.ref(`users/${id}`).set({
    email: email
  });

export const onceGetUsers = () => {
  return db.ref('users').once('value');
};
