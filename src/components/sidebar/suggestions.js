/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from './suggested-profile';

export default function Suggestions({ userId, following }) {
  const [profiles, setProfiles] = useState();
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      console.log('response', response);
      setProfiles(response);
    }
    console.log('profiles', profiles);
    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);
  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base"> Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            userDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
            // eslint-disable-next-line prettier/prettier
          />
        ))}
      </div>
    </div>
  ) : null;
}

Suggestions.protoTypes = {
  userId: PropTypes.string,
  following: PropTypes.array
};
