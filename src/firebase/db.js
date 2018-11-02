import { db } from './firebase';

//User APIs

export const createUserInDb = async (id, email) => {
  try {
    await db
      .collection('users')
      .doc(id)
      .set({
        userId: id,
        email: email
      });
  } catch (err) {
    console.error(err);
  }
};

// export const getAllUsers = async () => {
//   try {
//     const querySnapshot = await db.collection('users').get();
//     querySnapshot.forEach(doc => console.log(doc.id, doc.data()));
//   } catch (err) {
//     console.error(err);
//   }
// };

export const getUser = async userId => {
  try {
    const docRef = db.collection('users').doc(userId);
    const user = await docRef.get();
    return user.data();
  } catch (err) {
    console.error(err);
  }
};

//Task APIs

export const createTaskInDb = async (id, task) => {
  try {
    const docRef = await db
      .collection('users')
      .doc(id)
      .collection('tasks')
      .add(task);
    return docRef;
  } catch (err) {
    console.error(err);
  }
};

export const updateTaskId = async (userId, taskId) => {
  try {
    await db
      .collection('users')
      .doc(userId)
      .collection('tasks')
      .doc(taskId)
      .update({ taskId: taskId });
  } catch (err) {
    console.error(err);
  }
};

export const updateExpired = async (userId, taskId) => {
  try {
    await db
      .collection('users')
      .doc(userId)
      .collection('tasks')
      .doc(taskId)
      .update({
        isExpired: true
      });
  } catch (err) {
    console.error(err);
  }
};

export const updateCompleted = async (userId, taskId, isCompleted) => {
  try {
    db.collection('users')
      .doc(userId)
      .collection('tasks')
      .doc(taskId)
      .update({
        isCompleted: isCompleted
      });
  } catch (err) {
    console.error(err);
  }
};

export const getValidTasks = async userId => {
  try {
    const taskRef = await db
      .collection('users')
      .doc(userId)
      .collection('tasks');
    const currentTime = new Date().getTime();
    const query = await taskRef
      .where('isCompleted', '==', false)
      .where('timeExpired', '>', currentTime)
      .get();
    const taskArray = [];
    query.forEach(doc => {
      const task = doc.data();
      taskArray.push(task);
    });
    return taskArray;
  } catch (err) {
    console.error(err);
  }
};
