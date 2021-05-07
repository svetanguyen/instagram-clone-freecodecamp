/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [userExists, setUserExists] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExists() {
      const user = await getUserByUsername(username);
      if (user.length > 0) {
        setUser(user[0]);
        setUserExists(true);
      } else {
        setUserExists(false);
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
    console.log('user', user);
  }, [username, history]);

  return userExists ? (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">{username}</div>
    </div>
  ) : null;
}
