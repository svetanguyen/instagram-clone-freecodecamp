/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function SuggestedProfile({
  userDocId,
  username,
  profileId,
  userId
}) {
  return <p>I am a suggested profile {username}</p>;
}
