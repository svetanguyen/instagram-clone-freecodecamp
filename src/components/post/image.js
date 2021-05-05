import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function Image({ docId, totalLikes, likedPhoto, src, caption }) {
  const {
    user: { uid: userId = '' }
  } = useContext(UserContext);
  const [likes, setLikes] = useState(totalLikes);
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const handleDoubleClick = async () => {
    await firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({
        likes: FieldValue.arrayUnion(userId)
      });
    setLikes(() => (likedPhoto ? likes : likes + 1));
    console.log('liked', likedPhoto);
  };
  return (
    <img
      onDoubleClick={handleDoubleClick}
      className=""
      src={src}
      alt={caption}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  docId: PropTypes.string.isRequired,
  totalLikes: PropTypes.number.isRequired,
  likedPhoto: PropTypes.bool.isRequired
};
