/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './header';

export default function Post({ content }) {
  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-16">
      <Header username={content.username} />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhotos: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired
  })
};
