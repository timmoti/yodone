import { db } from './firebase';

//User API

export const createUserInDb = async (id, email) => {
  try {
    await db
      .collection('users')
      .doc(id)
      .set({
        email: email,
        tasks: {}
      });
  } catch (err) {
    console.error(err);
  }
};

export const getAllUsers = async () => {
  try {
    const querySnapshot = await db.collection('users').get();
    querySnapshot.forEach(doc => console.log(doc.id, doc.data()));
  } catch (err) {
    console.error(err);
  }
};

export const getUser = async userId => {
  try {
    const docRef = db.collection('users').doc(userId);
    const user = await docRef.get();
    console.log(user);
    console.log(user.data());
    return user.data();
  } catch (err) {
    console.error(err);
  }
};

//Task API
