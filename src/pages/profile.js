/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { getUserByUsername } from '../services/firebase';
import Header from '../components/header';
import UserProfile from '../components/profile';

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExists() {
      const user = await getUserByUsername(username);
      if (user.length > 0) {
        setUser(user[0]);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
    console.log('user', user);
  }, [username, history]);
  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto p-4 max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
