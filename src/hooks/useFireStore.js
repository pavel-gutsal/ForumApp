import { projectFirestore, timeStamp } from '../firebase/config';

export const useFireStore = (collection) => {
  const addMessage = async (message) => {
    try {
      const createdAt = timeStamp.fromDate(new Date());
      await projectFirestore.collection(collection).add({ ...message, createdAt });
    } catch (err) {
      console.warn(err);
    }
  };

  const deleteMessage = async (messageId) => {
    try {
      await projectFirestore.collection(collection).doc(messageId).delete();
    } catch (err) {
      console.warn(err);
    }
  };

  return { addMessage, deleteMessage };
};
