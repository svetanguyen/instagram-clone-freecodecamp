import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDVqmVMdetnml-NgcQkgUFX2Bu99xqNRXs',
  authDomain: 'instagram-32aed.firebaseapp.com',
  projectId: 'instagram-32aed',
  storageBucket: 'instagram-32aed.appspot.com',
  messagingSenderId: '554337417806',
  appId: '1:554337417806:web:7d98ea9ca9abe5b07ee11f'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
