/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  updateLoggedInUserFollowing,
  updateFollowedUsersFollowers
} from '../../services/firebase';

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId
}) {
  const [followed, setFollowed] = useState(false);
  async function handleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUsersFollowers(profileDocId, userId, false);
  }
  return !followed ? (
    <div
      data-id={profileId}
      data-doc-id={profileDocId}
      className="flex flex-row items-center align-items justify-between"
    >
      <div className="grid grid-rows-2 grid-flow-col">
        <img
          className="row-span-2 rounded-full w-10 flex mr-3"
          src={`images/avatars/${username}.jpg`}
          alt={`${username} avatar`}
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
        <p className="text-gray-base text-xs">Suggested for you</p>
        <button
          type="button"
          className="text-xs row-span-2 ml-4 font-bold text-pink-medium"
          onClick={() => handleFollowUser()}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired
};
