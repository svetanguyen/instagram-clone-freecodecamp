/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable array-callback-return */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Comments({
  docId,
  comments: allComments,
  posted,
  commentInput
}) {
  const [comments, setComments] = useState(allComments);
  return (
    <>
      <div className="p-4 pt-1 pb-4">
        {comments.length >= 1 && (
          <p className="text-sm text-gray-base mb-1 cursor-pointer">
            View all {comments.length} comments
          </p>
        )}
        {comments.slice(0, 3).map((item) => {
          <p key={`${item.comment}-${item.displayName}`} className="mb-1">
            <Link to={`/p/${item.displayName}`}>
              <span className="mr-1 font-bold">{item.displayName}</span>
            </Link>
            <span className="text-gray-base uppercase text-xs mt-2">
              {posted}
            </span>
          </p>
        })}
      </div>
    </>
  );
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired
};
