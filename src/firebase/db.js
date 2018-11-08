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

export const updateCompleted = async (
  userId,
  taskId,
  isCompleted,
  timeCompleted
) => {
  try {
    db.collection('users')
      .doc(userId)
      .collection('tasks')
      .doc(taskId)
      .update({
        isCompleted: isCompleted,
        timeCompleted: timeCompleted
      });
  } catch (err) {
    console.error(err);
  }
};

export const updateTask = async (userId, taskId, name) => {
  try {
    db.collection('users')
      .doc(userId)
      .collection('tasks')
      .doc(taskId)
      .update({
        name: name
      });
  } catch (err) {
    console.error(err);
  }
};

export const deleteTask = async (userId, taskId) => {
  try {
    db.collection('users')
      .doc(userId)
      .collection('tasks')
      .doc(taskId)
      .delete();
  } catch (err) {
    console.error(err);
  }
};

export const getValidTodayTasks = async userId => {
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

export const getValidBacklogTasks = async userId => {
  try {
    const taskRef = await db
      .collection('users')
      .doc(userId)
      .collection('tasks');
    const query = await taskRef
      .where('isCompleted', '==', false)
      .where('location', '==', 'backlog')
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
