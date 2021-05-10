/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId, getPhotos } from '../services/firebase';

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' }
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimeLinePhotos() {
      const [{ following }] = await getUserByUserId(userId);
      let followedUsersPhotos = [];
      if (following.length > 0) {
        followedUsersPhotos = await getPhotos(userId, following);
      }

      followedUsersPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUsersPhotos);
    }
    getTimeLinePhotos();
  }, [userId]);

  return { photos };
}
