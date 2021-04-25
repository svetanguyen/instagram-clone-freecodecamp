import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAPuQl3Kmbe_dE0IaWTCIHSEOkQRSdCBtE',
  authDomain: 'instagram-yt-5166d.firebaseapp.com',
  projectId: 'instagram-yt-5166d',
  storageBucket: 'instagram-yt-5166d.appspot.com',
  messagingSenderId: '863264225258',
  appId: '1:863264225258:web:dd7cb1621a3bc19e426493'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

export { firebase, FieldValue };
