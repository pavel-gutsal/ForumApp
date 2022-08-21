/*eslint-disable*/

import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection) => {
  const [document, setDocument] = useState();

  useEffect(() => {
    const unsub = projectFirestore.collection(collection).orderBy('createdAt', 'asc')
      .onSnapshot((snapShot) => {
        const result = [];
        snapShot.forEach((doc) => {
          result.push({ ...doc.data(), messageId: doc.id });
        });
        console.log(result);
        setDocument(result);
      });

      return () => unsub
  }, []);
  return { document };
};
