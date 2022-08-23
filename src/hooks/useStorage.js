import { useState } from 'react';
import { storage } from '../firebase/config';

export const useStorage = () => {
  const [progress, setProgress] = useState();
  const [imageUrl, setImageUrl] = useState(null);
  const [imageStorageName, setImageStorageName] = useState(null);
  const uploadImage = (image) => {
    try {
      const randomString = Math.floor(Math.random() * (90 * 10 ** 8)) + 10 * 10 ** 8;
      const storageName = `images/${randomString}${image.name}`;
      setImageStorageName(storageName);
      // eslint-disable-next-line no-unused-vars
      const storageRef = storage.ref(storageName).put(image);

      storageRef.on(
        'state_changed',
        (snapshot) => {
          // eslint-disable-next-line prefer-const
          let persantage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(persantage);
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {},
        async () => {
        // eslint-disable-next-line no-unused-vars
          const imgURL = await storageRef.snapshot.ref.getDownloadURL();
          setImageUrl(imgURL);
          console.log(imageUrl);
        },
      );
    } catch (err) {
      console.warn(err);
    }
  };

  const deleteStorageImage = async (imageDIR) => {
    try {
      await storage.ref(imageDIR).delete();
    } catch (err) {
      console.warn(err);
    }
  };

  return {
    uploadImage,
    progress,
    imageUrl,
    imageStorageName,
    deleteStorageImage,
  };
};
